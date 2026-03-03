import { FireIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Dispatch, FC } from "react";

const items: { key: string; label: string; icon: any }[] = [
  { key: "overview", label: "Overview", icon: HomeIcon },
  { key: "users", label: "Users", icon: UserGroupIcon },
  { key: "workouts", label: "Workouts", icon: FireIcon },
];

const Sidebar: FC<{ view: string; setView: Dispatch<string> }> = ({
  view,
  setView,
}) => {
  return (
    <aside className="w-72 bg-white border-r">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-semibold">FitAdmin</h2>
        <p className="text-sm text-slate-500">Fitness tracking dashboard</p>
      </div>
      <nav className="p-4 space-y-1">
        {items.map((it) => {
          const Icon = it.icon;
          const active = view === it.key;
          return (
            <button
              key={it.key}
              onClick={() => setView(it.key)}
              className={`w-full flex items-center gap-3 p-3 rounded-md text-sm hover:bg-slate-50 ${
                active ? "bg-slate-100 font-medium" : "text-slate-700"
              }`}
            >
              <Icon className="h-5 w-5 text-slate-600" />
              <span>{it.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
