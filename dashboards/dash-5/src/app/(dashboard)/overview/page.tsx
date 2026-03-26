"use client";

import { KpiCard } from "@/components/kpi-card";
import {
  dailyActivity,
  planDistribution,
  workouts,
  workoutTypeStats,
} from "@/data/mock-data";
import { OverviewCharts } from "@/features/overview/overview-charts";
import { useUsers } from "@/hooks/use-users";
import { formatNumber } from "@/utils/format";

export default function OverviewPage() {
  const { allUsers } = useUsers();

  const totalUsers = allUsers.length;
  const activeUsers = allUsers.filter(
    (user) => user.status === "Active",
  ).length;
  const totalWorkouts = workouts.length;
  const avgCalories = Math.round(
    workouts.reduce((total, item) => total + item.calories, 0) /
      workouts.length,
  );

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-heading text-2xl font-bold">Overview</h1>
        <p className="text-sm text-muted-foreground">
          Ključne metrike i pregled performansi platforme.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Total Users"
          value={formatNumber(totalUsers)}
          helper="Ukupan broj registrovanih"
        />
        <KpiCard
          title="Active Users"
          value={formatNumber(activeUsers)}
          helper="Korisnici sa aktivnim statusom"
        />
        <KpiCard
          title="Total Workouts"
          value={formatNumber(totalWorkouts)}
          helper="Treninzi u poslednjem periodu"
        />
        <KpiCard
          title="Avg Calories Burned"
          value={formatNumber(avgCalories)}
          helper="Prosek po treningu"
        />
      </div>

      <OverviewCharts
        dailyActivity={dailyActivity}
        workoutTypes={workoutTypeStats}
        plans={planDistribution}
      />
    </div>
  );
}
