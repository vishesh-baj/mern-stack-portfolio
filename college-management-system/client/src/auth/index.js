// auth.js
export const isLoggedIn = () => {
  // Add your logic to check if the user is authenticated
  // For example, check if a token is present in local storage
  const token = localStorage.getItem("token");
  return token !== null && token !== undefined;
};
