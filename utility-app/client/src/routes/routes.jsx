import { Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import PropTypes from "prop-types";

export const PrivateRoute = ({ element, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={redirectTo || PATHS.loginPage} replace />
  );
};

export const AuthRoute = ({ element, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={redirectTo || PATHS.home} replace />
  );
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

AuthRoute.propTypes = {
  element: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
