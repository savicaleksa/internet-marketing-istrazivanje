import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Analytics from "./pages/Analytics";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Workouts from "./pages/Workouts";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/" element={<Navigate to="/overview" replace />} />
        </Routes>
      </main>
    </div>
  );
}
