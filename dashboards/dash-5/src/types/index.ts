export type SubscriptionPlan = "Free" | "Pro";
export type UserStatus = "Active" | "Suspended";
export type WorkoutStatus = "Completed" | "In Progress";
export type WorkoutType = "Running" | "Gym" | "Yoga" | "Cycling";

export interface User {
  id: string;
  name: string;
  email: string;
  plan: SubscriptionPlan;
  status: UserStatus;
  lastWorkout: string;
}

export interface Workout {
  id: string;
  userId: string;
  userName: string;
  type: WorkoutType;
  durationMinutes: number;
  calories: number;
  date: string;
  status: WorkoutStatus;
}

export interface DailyActivityPoint {
  day: string;
  workouts: number;
  calories: number;
}

export interface WorkoutTypePoint {
  type: WorkoutType;
  total: number;
}

export interface PlanPoint {
  plan: SubscriptionPlan;
  users: number;
}

export interface AppSettings {
  betaInsights: boolean;
  smartAlerts: boolean;
  autoSuspendInactive: boolean;
  pushNotifications: boolean;
  emailNotifications: boolean;
}
