import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { chartData } from "../data/mock";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const Overview = () => {
  const line = {
    labels: chartData.activityByDay.labels,
    datasets: [
      {
        label: "Active minutes",
        data: chartData.activityByDay.data,
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6,182,212,0.08)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const bar = {
    labels: chartData.activityByType.labels,
    datasets: [
      {
        label: "Workouts",
        data: chartData.activityByType.data,
        backgroundColor: ["#7c3aed", "#06b6d4", "#f97316", "#f43f5e"],
      },
    ],
  };

  const pie = {
    labels: chartData.plans.labels,
    datasets: [
      {
        data: chartData.plans.data,
        backgroundColor: ["#60a5fa", "#34d399"],
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium mb-2">Activity (this week)</h3>
          <Line data={line} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium mb-2">Plans</h3>
          <Pie data={pie} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium mb-2">Workout types</h3>
          <Bar data={bar} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium mb-2">Quick metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded">
              <div className="text-xs text-slate-500">Total Users</div>
              <div className="text-xl font-bold">360</div>
            </div>
            <div className="p-4 bg-slate-50 rounded">
              <div className="text-xs text-slate-500">Active Users</div>
              <div className="text-xl font-bold">128</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
