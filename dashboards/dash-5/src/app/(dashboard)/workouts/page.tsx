"use client";

import { WorkoutsTable } from "@/features/workouts/workouts-table";
import { useWorkouts } from "@/hooks/use-workouts";

export default function WorkoutsPage() {
  const { workouts, typeFilter, setTypeFilter, statusFilter, setStatusFilter } =
    useWorkouts();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-heading text-2xl font-bold">Workouts</h1>
        <p className="text-sm text-muted-foreground">
          Pregled treninga sa filterima po tipu i statusu.
        </p>
      </div>

      <WorkoutsTable
        workouts={workouts}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
    </div>
  );
}
