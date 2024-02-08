import { Routes, Route } from "react-router-dom";
import { DashboardPage, HomePage, LoginPage, PageNotFoundPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}
