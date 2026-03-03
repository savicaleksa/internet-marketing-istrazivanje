import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Overview" },
  { to: "/users", label: "Users" },
  { to: "/workouts", label: "Workouts" },
  { to: "/analytics", label: "Analytics" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg shadow-sm">
      <div className="mb-6 text-xl font-semibold">Fitness Admin</div>
      <nav className="flex flex-col gap-2">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 ${isActive ? "bg-slate-100 dark:bg-slate-700" : ""}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
