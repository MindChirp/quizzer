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