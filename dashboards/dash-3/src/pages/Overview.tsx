import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { metrics } from "../data/mock";

export default function Overview() {
  const data = {
    labels: Array.from({ length: 12 }).map((_, i) => `M${i + 1}`),
    datasets: [
      {
        label: "Active users",
        data: Array.from({ length: 12 }).map(() =>
          Math.round(Math.random() * 100),
        ),
        borderColor: "#2563eb",
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white border rounded">
          Total Users
          <br />
          <strong>{metrics.totalUsers}</strong>
        </div>
        <div className="p-4 bg-white border rounded">
          Active Users
          <br />
          <strong>{metrics.activeUsers}</strong>
        </div>
        <div className="p-4 bg-white border rounded">
          Total Workouts
          <br />
          <strong>{metrics.totalWorkouts}</strong>
        </div>
        <div className="p-4 bg-white border rounded">
          Avg Calories
          <br />
          <strong>{metrics.avgCalories}</strong>
        </div>
      </div>
      <div className="p-4 bg-white border rounded">
        <Line data={data} />
      </div>
    </div>
  );
}
