export type PlanType = "Free" | "Pro";
export type UserStatus = "Active" | "Suspended";
export type WorkoutType = "Running" | "Gym" | "Yoga" | "Cycling";
export type WorkoutStatus = "Completed" | "In Progress";

export interface User {
  id: string;
  name: string;
  email: string;
  plan: PlanType;
  status: UserStatus;
  lastWorkout: string;
}

export interface Workout {
  id: string;
  user: string;
  type: WorkoutType;
  duration: number;
  calories: number;
  date: string;
  status: WorkoutStatus;
}

export interface SubscriptionPlan {
  id: PlanType;
  monthlyPrice: number;
  userCount: number;
  features: string[];
}

export interface AppSettings {
  darkMode: boolean;
  pushNotifications: boolean;
  weeklyReports: boolean;
  allowTrialExtensions: boolean;
}
