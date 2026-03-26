import { useMemo, useState } from "react";
import { mockWorkouts } from "../features/data/mockData";
import type { WorkoutStatus, WorkoutType } from "../types";

export function useWorkouts() {
  const [workouts] = useState(mockWorkouts);
  const [typeFilter, setTypeFilter] = useState<WorkoutType | "All">("All");
  const [statusFilter, setStatusFilter] = useState<WorkoutStatus | "All">(
    "All",
  );

  const filteredWorkouts = useMemo(
    () =>
      workouts.filter((workout) => {
        const typeOk = typeFilter === "All" || workout.type === typeFilter;
        const statusOk =
          statusFilter === "All" || workout.status === statusFilter;
        return typeOk && statusOk;
      }),
    [workouts, typeFilter, statusFilter],
  );

  return {
    workouts: filteredWorkouts,
    typeFilter,
    setTypeFilter,
    statusFilter,
    setStatusFilter,
  };
}
