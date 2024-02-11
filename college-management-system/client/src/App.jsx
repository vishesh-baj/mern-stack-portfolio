import { Routes, Route } from "react-router-dom";
import { DashboardPage, HomePage, LoginPage, PageNotFoundPage } from "./pages";
import { PrivateRoute } from "./routes/routes";
import { PATHS } from "./routes/paths";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute element={<DashboardPage />} redirectTo={PATHS.login} />
        }
      />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}
