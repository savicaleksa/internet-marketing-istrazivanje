import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "../../components/Card";
import type { User, Workout } from "../../types";

interface OverviewChartsProps {
  users: User[];
  workouts: Workout[];
}

const pieColors = ["#0ea5e9", "#22c55e"];

const axisStyle = { fill: "var(--text-muted)", fontSize: 12 };
const tooltipStyle = {
  backgroundColor: "var(--bg-surface)",
  border: "1px solid var(--border-color)",
  borderRadius: "10px",
  color: "var(--text-primary)",
};

export function OverviewCharts({ users, workouts }: OverviewChartsProps) {
  const lineData = workouts
    .slice()
    .reverse()
    .map((workout) => ({
      day: workout.date.slice(5),
      calories: workout.calories,
    }));

  const barData = ["Running", "Gym", "Yoga", "Cycling"].map((type) => ({
    type,
    count: workouts.filter((workout) => workout.type === type).length,
  }));

  const pieData = [
    {
      name: "Free",
      value: users.filter((user) => user.plan === "Free").length,
    },
    { name: "Pro", value: users.filter((user) => user.plan === "Pro").length },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <Card title="Activity by Day" className="xl:col-span-2">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
              <XAxis dataKey="day" tick={axisStyle} />
              <YAxis tick={axisStyle} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="calories"
                stroke="var(--accent)"
                strokeWidth={2.2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Plan Split">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
              >
                {pieData.map((entry, idx) => (
                  <Cell
                    key={entry.name}
                    fill={pieColors[idx % pieColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ color: "var(--text-muted)" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Workouts by Type" className="xl:col-span-3">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />
              <XAxis dataKey="type" tick={axisStyle} />
              <YAxis tick={axisStyle} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="count" fill="var(--accent)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
