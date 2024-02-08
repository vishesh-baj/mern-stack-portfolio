import { Routes, Route, useNavigate } from "react-router-dom";
import { DashboardPage, HomePage, LoginPage, PageNotFoundPage } from "./pages";

export default function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <h1 className="text-3xl font-bold underline">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </h1>
  );
}
