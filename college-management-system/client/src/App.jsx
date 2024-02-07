import { Routes, Route } from "react-router-dom";
import { DashboardPage, HomePage } from "./pages";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </h1>
  );
}
