import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useMemo } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Workout } from "../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

export default function Analytics({
  workouts,
  onDrill,
}: {
  workouts: Workout[];
  onDrill: (f: any) => void;
}) {
  // activity per day (last 30 days)
  const days = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    return d;
  });
  const lineData = useMemo(() => {
    const labels = days.map((d) => d.toLocaleDateString());
    const counts = labels.map((l) => 0);
    workouts.forEach((w) => {
      const idx = labels.indexOf(new Date(w.date).toLocaleDateString());
      if (idx >= 0) counts[idx]++;
    });
    return {
      labels,
      datasets: [
        {
          label: "Activity",
          data: counts,
          borderColor: "#4f46e5",
          backgroundColor: "#c7d2fe",
        },
      ],
    };
  }, [workouts]);

  const barData = useMemo(() => {
    const types = ["Running", "Gym", "Yoga", "Cycling"];
    const counts = types.map(
      (t) => workouts.filter((w) => w.type === t).length,
    );
    return {
      labels: types,
      datasets: [
        {
          label: "By Type",
          data: counts,
          backgroundColor: ["#60a5fa", "#f59e0b", "#34d399", "#f87171"],
        },
      ],
    };
  }, [workouts]);

  const pieData = useMemo(() => {
    // plans distribution via users referenced in workouts (approx)
    // For simplicity, random split by workout.userId last char
    const plans = { free: 0, pro: 0 };
    workouts.forEach((w) => {
      const p = w.userId.endsWith("0") ? "pro" : "free";
      plans[p as "free" | "pro"]++;
    });
    return {
      labels: ["Free", "Pro"],
      datasets: [
        {
          data: [plans.free, plans.pro],
          backgroundColor: ["#cbd5e1", "#60a5fa"],
        },
      ],
    };
  }, [workouts]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow-sm dark:bg-slate-800">
          <h3 className="mb-2 font-medium">Activity (last 30 days)</h3>
          <Line data={lineData} />
        </div>
        <div className="p-4 bg-white rounded shadow-sm dark:bg-slate-800">
          <h3 className="mb-2 font-medium">Workouts by Type</h3>
          <Bar data={barData} />
        </div>
        <div className="p-4 bg-white rounded shadow-sm dark:bg-slate-800 lg:col-span-2">
          <h3 className="mb-2 font-medium">Plans</h3>
          <div className="max-w-sm">
            <Pie
              data={pieData}
              onElementsClick={(elems) => {
                if (elems.length) {
                  const idx = elems[0].index;
                  const label = pieData.labels[idx];
                  onDrill({ plan: label.toLowerCase() });
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
