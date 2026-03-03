import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { mockUsers, mockWorkouts } from "./data/mock";
import Analytics from "./pages/Analytics";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Workouts from "./pages/Workouts";
import { User, Workout } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>(() => mockUsers);
  const [workouts, setWorkouts] = useState<Workout[]>(() => mockWorkouts);
  const [workoutFilter, setWorkoutFilter] = useState<{
    type?: string;
    dateFrom?: string;
    dateTo?: string;
    userId?: string;
  } | null>(null);

  const counts = useMemo(
    () => ({
      totalUsers: users.length,
      totalWorkouts: workouts.length,
    }),
    [users, workouts],
  );

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Overview counts={counts} />} />
            <Route
              path="/users"
              element={<Users users={users} setUsers={setUsers} />}
            />
            <Route
              path="/workouts"
              element={
                <Workouts
                  workouts={workouts}
                  setWorkouts={setWorkouts}
                  filter={workoutFilter}
                />
              }
            />
            <Route
              path="/analytics"
              element={
                <Analytics
                  workouts={workouts}
                  onDrill={(filter) => setWorkoutFilter(filter)}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}
