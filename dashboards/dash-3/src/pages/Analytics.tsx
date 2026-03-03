import "chart.js/auto";
import { useMemo, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { workouts } from "../data/mock";

export default function Analytics() {
  const [drill, setDrill] = useState<string | null>(null);

  const typeCounts = useMemo(() => {
    const map = new Map<string, number>();
    workouts.forEach((w) => map.set(w.type, (map.get(w.type) || 0) + 1));
    return Array.from(map.entries());
  }, []);

  const pieData = {
    labels: typeCounts.map((t) => t[0]),
    datasets: [
      {
        data: typeCounts.map((t) => t[1]),
        backgroundColor: ["#60a5fa", "#34d399", "#f59e0b", "#fb7185"],
      },
    ],
  };

  const lineData = {
    labels: Array.from({ length: 12 }).map((_, i) => i + 1),
    datasets: [
      {
        label: "Workouts",
        data: Array.from({ length: 12 }).map(() =>
          Math.round(Math.random() * 100),
        ),
        borderColor: "#06b6d4",
      },
    ],
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Calories",
        data: [120, 200, 150, 180, 90, 220, 130],
        backgroundColor: "#6366f1",
      },
    ],
  };

  function onPieClick(elements: any) {
    if (elements.length > 0) {
      const idx = elements[0].index;
      setDrill(pieData.labels[idx]);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white border rounded">
          <Line data={lineData} />
        </div>
        <div className="p-4 bg-white border rounded">
          <Bar data={barData} />
        </div>
        <div className="p-4 bg-white border rounded">
          <Pie data={pieData} onClick={(e, elements) => onPieClick(elements)} />
          {drill && <div className="mt-2">Drill: {drill} (filtered view)</div>}
        </div>
      </div>
    </div>
  );
}
