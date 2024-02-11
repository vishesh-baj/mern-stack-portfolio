import { Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import PropTypes from "prop-types";

export const PrivateRoute = ({ element, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={PATHS.login || redirectTo} replace />
  );
};

export const AuthRoute = ({ element, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={redirectTo || PATHS.root} replace />
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
