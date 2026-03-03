import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 font-bold text-xl">Fitness Admin</div>
      <nav className="p-4 space-y-2">
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            "block p-2 rounded " + (isActive ? "bg-slate-100" : "")
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            "block p-2 rounded " + (isActive ? "bg-slate-100" : "")
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/workouts"
          className={({ isActive }) =>
            "block p-2 rounded " + (isActive ? "bg-slate-100" : "")
          }
        >
          Workouts
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            "block p-2 rounded " + (isActive ? "bg-slate-100" : "")
          }
        >
          Analytics
        </NavLink>
      </nav>
    </aside>
  );
}
