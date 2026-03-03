export type Plan = "free" | "pro";

export interface User {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  status: "active" | "suspended";
  lastWorkout: string | null; // ISO date
}

export type WorkoutType = "Running" | "Gym" | "Yoga" | "Cycling";

export interface Workout {
  id: string;
  userId: string;
  type: WorkoutType;
  durationMin: number;
  calories: number;
  date: string; // ISO
  status: "completed" | "in_progress";
}
