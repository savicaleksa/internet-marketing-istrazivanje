export const users = [
  {
    id: "u1",
    name: "Ana Petrović",
    email: "ana@example.com",
    plan: "Pro",
    status: "Active",
    lastWorkout: "2026-02-28",
  },
  {
    id: "u2",
    name: "Marko Jovanović",
    email: "marko@example.com",
    plan: "Free",
    status: "Active",
    lastWorkout: "2026-03-01",
  },
  {
    id: "u3",
    name: "Jelena Nikolić",
    email: "jelena@example.com",
    plan: "Pro",
    status: "Suspended",
    lastWorkout: "2026-02-20",
  },
];

export const workouts = [
  {
    id: "w1",
    user: "Ana Petrović",
    type: "Running",
    duration: 30,
    calories: 320,
    date: "2026-03-01",
    status: "Completed",
  },
  {
    id: "w2",
    user: "Marko Jovanović",
    type: "Gym",
    duration: 50,
    calories: 450,
    date: "2026-03-02",
    status: "Completed",
  },
  {
    id: "w3",
    user: "Ana Petrović",
    type: "Yoga",
    duration: 40,
    calories: 180,
    date: "2026-02-28",
    status: "Completed",
  },
];

export const chartData = {
  activityByDay: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [30, 45, 28, 60, 50, 75, 40],
  },
  activityByType: {
    labels: ["Running", "Gym", "Yoga", "Cycling"],
    data: [120, 200, 80, 60],
  },
  plans: {
    labels: ["Free", "Pro"],
    data: [240, 120],
  },
};
