import { User, Workout, WorkoutType } from "../types";

function rnd(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const names = [
  "Ana",
  "Marko",
  "Jelena",
  "Ivan",
  "Petar",
  "Maja",
  "Luka",
  "Sara",
  "Nikola",
  "Mila",
  "Stefan",
  "Jovana",
  "Aleksandar",
  "Tamara",
  "Filip",
];
const domains = ["example.com", "mail.com", "fitapp.io"];
const types: WorkoutType[] = ["Running", "Gym", "Yoga", "Cycling"];

export function generateMockData() {
  const rand = rnd(12345);
  const users: User[] = [];
  for (let i = 0; i < 200; i++) {
    const name = `${names[Math.floor(rand() * names.length)]} ${String.fromCharCode(65 + Math.floor(rand() * 26))}.`;
    const email = `${name.replace(/\s+/g, "").toLowerCase()}@${domains[Math.floor(rand() * domains.length)]}`;
    const plan = rand() > 0.7 ? "pro" : "free";
    const status = rand() > 0.95 ? "suspended" : "active";
    const lastWorkout = Date.now() - Math.floor(rand() * 60) * 24 * 3600 * 1000;
    users.push({
      id: `u-${i}`,
      name,
      email,
      plan,
      status,
      lastWorkout: new Date(lastWorkout).toISOString(),
    });
  }

  const workouts: Workout[] = [];
  for (let i = 0; i < 500; i++) {
    const u = users[Math.floor(rand() * users.length)];
    const type = types[Math.floor(rand() * types.length)];
    const durationMin = 20 + Math.floor(rand() * 100);
    const calories = Math.round(durationMin * (3 + rand() * 8));
    const daysAgo = Math.floor(rand() * 90);
    const date = new Date(
      Date.now() - daysAgo * 24 * 3600 * 1000 - Math.floor(rand() * 86400000),
    ).toISOString();
    const status = rand() > 0.1 ? "completed" : "in_progress";
    workouts.push({
      id: `w-${i}`,
      userId: u.id,
      type,
      durationMin,
      calories,
      date,
      status,
    });
  }

  return { users, workouts };
}

export const { users: mockUsers, workouts: mockWorkouts } = generateMockData();
