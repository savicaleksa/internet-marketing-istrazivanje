import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Workouts from "./pages/Workouts";

type View = "overview" | "users" | "workouts";

function App() {
  const [view, setView] = useState<View>("overview");

  return (
    <div className="app-shell">
      <Sidebar view={view} setView={setView} />
      <main className="flex-1 p-6">
        {view === "overview" && <Overview />}
        {view === "users" && <Users />}
        {view === "workouts" && <Workouts />}
      </main>
    </div>
  );
}

export default App;
