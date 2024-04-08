import { TokenControllerService } from '@/lib/api'

export const getUserId = () => {
  return localStorage.getItem("username");
}

export const checkUserAuth = () => {
  return localStorage.getItem("username") && localStorage.getItem("refreshToken");
}

export const signOut = () => {
  sessionStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("username");
};

export const setTokensWithUserCredentials = async (username: string, password: string) => {
  try {
    const response = await TokenControllerService.authenticateUser({
      username,
      password
    })

    if (response?.accessToken && response?.refreshToken) {
      sessionStorage.setItem("accessToken", response.accessToken as string);
      localStorage.setItem("refreshToken", response.refreshToken as string);
      localStorage.setItem("username", username);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}