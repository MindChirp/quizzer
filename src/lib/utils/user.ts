export const getUserId = () => {
  return localStorage.getItem("username");
}

export const signOut = () => {
  sessionStorage.removeItem("JWT")

  localStorage.removeItem("username")

  location.reload();
};