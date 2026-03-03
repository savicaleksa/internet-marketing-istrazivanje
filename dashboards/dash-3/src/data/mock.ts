export type User = {
  id: string;
  name: string;
  email: string;
  plan: "Free" | "Pro";
  status: "Active" | "Suspended";
  lastWorkout: string;
};

export type Workout = {
  id: string;
  userId: string;
  type: string;
  duration: number;
  calories: number;
  date: string;
  status: "Completed" | "In Progress";
};

export const users: User[] = Array.from({ length: 23 }).map((_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  plan: i % 3 === 0 ? "Pro" : "Free",
  status: i % 7 === 0 ? "Suspended" : "Active",
  lastWorkout: new Date(Date.now() - i * 86400000).toISOString(),
}));

export const workouts: Workout[] = Array.from({ length: 60 }).map((_, i) => ({
  id: String(i + 1),
  userId: String((i % 23) + 1),
  type: ["Running", "Gym", "Yoga", "Cycling"][i % 4],
  duration: 20 + (i % 60),
  calories: 100 + (i % 300),
  date: new Date(Date.now() - i * 3600 * 1000 * 24).toISOString(),
  status: i % 5 === 0 ? "In Progress" : "Completed",
}));

export const metrics = {
  totalUsers: users.length,
  activeUsers: users.filter((u) => u.status === "Active").length,
  totalWorkouts: workouts.length,
  avgCalories: Math.round(
    workouts.reduce((s, w) => s + w.calories, 0) / workouts.length,
  ),
};
