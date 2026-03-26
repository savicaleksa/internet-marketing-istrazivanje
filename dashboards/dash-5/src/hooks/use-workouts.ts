"use client";

import { workouts as workoutsMock } from "@/data/mock-data";
import type { WorkoutStatus, WorkoutType } from "@/types";
import { useMemo, useState } from "react";

export function useWorkouts() {
  const [typeFilter, setTypeFilter] = useState<WorkoutType | "all">("all");
  const [statusFilter, setStatusFilter] = useState<WorkoutStatus | "all">(
    "all",
  );

  const workouts = useMemo(() => {
    return workoutsMock.filter((workout) => {
      const byType = typeFilter === "all" ? true : workout.type === typeFilter;
      const byStatus =
        statusFilter === "all" ? true : workout.status === statusFilter;

      return byType && byStatus;
    });
  }, [statusFilter, typeFilter]);

  return {
    workouts,
    typeFilter,
    setTypeFilter,
    statusFilter,
    setStatusFilter,
  };
}
