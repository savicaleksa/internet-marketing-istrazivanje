import { Card } from "../components/Card";
import { mockUsers, mockWorkouts } from "../features/data/mockData";
import { OverviewCharts } from "../features/overview/OverviewCharts";
import { formatNumber } from "../utils/format";

export function OverviewPage() {
  const totalUsers = mockUsers.length;
  const activeUsers = mockUsers.filter(
    (user) => user.status === "Active",
  ).length;
  const totalWorkouts = mockWorkouts.length;
  const avgCalories = Math.round(
    mockWorkouts.reduce((sum, workout) => sum + workout.calories, 0) /
      mockWorkouts.length,
  );

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="theme-text-muted text-sm">
          Key fitness metrics and activity trends.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card title="Total Users">
          <p className="text-3xl font-bold text-sky-700">
            {formatNumber(totalUsers)}
          </p>
        </Card>
        <Card title="Active Users">
          <p className="text-3xl font-bold text-emerald-700">
            {formatNumber(activeUsers)}
          </p>
        </Card>
        <Card title="Total Workouts">
          <p className="text-3xl font-bold text-indigo-700">
            {formatNumber(totalWorkouts)}
          </p>
        </Card>
        <Card title="Avg Calories Burned">
          <p className="text-3xl font-bold text-orange-700">
            {formatNumber(avgCalories)}
          </p>
        </Card>
      </div>

      <OverviewCharts users={mockUsers} workouts={mockWorkouts} />
    </div>
  );
}
