import { Routes, Route } from "react-router-dom";
import {
  DashboardPage,
  HomePage,
  LoginPage,
  PageNotFoundPage,
  RegisterPage,
} from "./pages";
import { AuthRoute, PrivateRoute } from "./routes/routes";
import { PATHS } from "./routes/paths";

export default function App() {
  return (
    <Routes>
      <Route path={PATHS.root} element={<HomePage />} />
      <Route
        path={PATHS.login}
        element={<AuthRoute element={<LoginPage />} redirectTo={PATHS.login} />}
      />
      <Route path={PATHS.register} element={<RegisterPage />} />
      <Route
        path={PATHS.dashboard}
        element={
          <PrivateRoute element={<DashboardPage />} redirectTo={PATHS.login} />
        }
      />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}
