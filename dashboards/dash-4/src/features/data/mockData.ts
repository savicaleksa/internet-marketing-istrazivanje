import type { AppSettings, SubscriptionPlan, User, Workout } from "../../types";

export const mockUsers: User[] = [
  {
    id: "u-01",
    name: "Ana Jovanovic",
    email: "ana.jovanovic@fitmail.com",
    plan: "Pro",
    status: "Active",
    lastWorkout: "2026-03-25",
  },
  {
    id: "u-02",
    name: "Stefan Markovic",
    email: "stefan.markovic@fitmail.com",
    plan: "Free",
    status: "Active",
    lastWorkout: "2026-03-24",
  },
  {
    id: "u-03",
    name: "Mila Petrovic",
    email: "mila.petrovic@fitmail.com",
    plan: "Pro",
    status: "Suspended",
    lastWorkout: "2026-03-20",
  },
  {
    id: "u-04",
    name: "Nikola Nikolic",
    email: "nikola.nikolic@fitmail.com",
    plan: "Free",
    status: "Active",
    lastWorkout: "2026-03-18",
  },
  {
    id: "u-05",
    name: "Jelena Simic",
    email: "jelena.simic@fitmail.com",
    plan: "Pro",
    status: "Active",
    lastWorkout: "2026-03-26",
  },
  {
    id: "u-06",
    name: "Luka Savic",
    email: "luka.savic@fitmail.com",
    plan: "Free",
    status: "Suspended",
    lastWorkout: "2026-03-11",
  },
];

export const mockWorkouts: Workout[] = [
  {
    id: "w-01",
    user: "Ana Jovanovic",
    type: "Running",
    duration: 45,
    calories: 480,
    date: "2026-03-25",
    status: "Completed",
  },
  {
    id: "w-02",
    user: "Stefan Markovic",
    type: "Gym",
    duration: 70,
    calories: 620,
    date: "2026-03-24",
    status: "Completed",
  },
  {
    id: "w-03",
    user: "Mila Petrovic",
    type: "Yoga",
    duration: 55,
    calories: 260,
    date: "2026-03-23",
    status: "In Progress",
  },
  {
    id: "w-04",
    user: "Nikola Nikolic",
    type: "Cycling",
    duration: 65,
    calories: 540,
    date: "2026-03-22",
    status: "Completed",
  },
  {
    id: "w-05",
    user: "Jelena Simic",
    type: "Gym",
    duration: 50,
    calories: 430,
    date: "2026-03-21",
    status: "Completed",
  },
  {
    id: "w-06",
    user: "Luka Savic",
    type: "Running",
    duration: 40,
    calories: 390,
    date: "2026-03-20",
    status: "In Progress",
  },
  {
    id: "w-07",
    user: "Ana Jovanovic",
    type: "Yoga",
    duration: 35,
    calories: 210,
    date: "2026-03-19",
    status: "Completed",
  },
];

export const mockPlans: SubscriptionPlan[] = [
  {
    id: "Free",
    monthlyPrice: 0,
    userCount: 3,
    features: ["Basic analytics", "Workout logging", "Community feed"],
  },
  {
    id: "Pro",
    monthlyPrice: 19,
    userCount: 3,
    features: ["Advanced analytics", "Goal engine", "Priority support"],
  },
];

export const defaultSettings: AppSettings = {
  darkMode: false,
  pushNotifications: true,
  weeklyReports: true,
  allowTrialExtensions: false,
};
