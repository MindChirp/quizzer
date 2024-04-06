export const getUserId = () => {
  return localStorage.getItem("username");
}

export const signOut = () => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
  localStorage.removeItem("username");
  location.reload();
};