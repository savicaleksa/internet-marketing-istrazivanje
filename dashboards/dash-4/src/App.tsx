import { useState } from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { Button } from "./components/Button";
import { useSettings } from "./hooks/useSettings";
import { OverviewPage } from "./pages/OverviewPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SubscriptionPlansPage } from "./pages/SubscriptionPlansPage";
import { UsersPage } from "./pages/UsersPage";
import { WorkoutsPage } from "./pages/WorkoutsPage";

const navItems = [
  { to: "/overview", label: "Overview" },
  { to: "/users", label: "Users Management" },
  { to: "/workouts", label: "Workouts" },
  { to: "/plans", label: "Subscription Plans" },
  { to: "/settings", label: "Settings" },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { settings, toggleSetting } = useSettings();

  return (
    <div
      className={[
        "min-h-screen overflow-x-hidden",
        settings.darkMode ? "theme-dark" : "theme-light",
      ].join(" ")}
      style={{ backgroundColor: "var(--bg-app)", color: "var(--text-primary)" }}
    >
      <div className="mx-auto flex min-h-screen max-w-[1400px]">
        <aside
          className={[
            "fixed inset-y-0 left-0 z-40 w-72 border-r p-6 transition-transform lg:static lg:translate-x-0 theme-surface",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Fit Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Performance Hub</h1>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  [
                    "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sky-600 text-white"
                      : "theme-text-secondary hover:bg-[var(--interactive-soft)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header
            className={[
              "sticky top-0 z-30 flex items-center justify-between border-b px-4 py-3 backdrop-blur lg:px-8 theme-surface",
            ].join(" ")}
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--bg-surface) 95%, transparent)",
            }}
          >
            <div>
              <p className="theme-text-muted text-xs uppercase tracking-[0.18em]">
                Fitness Tracking Admin
              </p>
              <p className="text-lg font-semibold">Frontend Dashboard</p>
            </div>
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              Menu
            </Button>
          </header>

          <main className="min-w-0 flex-1 px-4 py-6 lg:px-8 lg:py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/workouts" element={<WorkoutsPage />} />
              <Route path="/plans" element={<SubscriptionPlansPage />} />
              <Route
                path="/settings"
                element={
                  <SettingsPage
                    settings={settings}
                    toggleSetting={toggleSetting}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
