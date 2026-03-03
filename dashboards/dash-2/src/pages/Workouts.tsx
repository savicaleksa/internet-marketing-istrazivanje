import { useMemo, useState } from "react";
import { Workout } from "../types";

export default function Workouts({
  workouts,
  setWorkouts,
  filter,
}: {
  workouts: Workout[];
  setWorkouts: (w: Workout[]) => void;
  filter?: any;
}) {
  const [type, setType] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const mergedFilter = {
    ...filter,
    ...(type ? { type } : {}),
    ...(dateFrom ? { dateFrom } : {}),
    ...(dateTo ? { dateTo } : {}),
  };

  const filtered = useMemo(
    () =>
      workouts.filter((w) => {
        if (mergedFilter?.type && w.type !== mergedFilter.type) return false;
        if (mergedFilter?.userId && w.userId !== mergedFilter.userId)
          return false;
        if (
          mergedFilter?.dateFrom &&
          new Date(w.date) < new Date(mergedFilter.dateFrom)
        )
          return false;
        if (
          mergedFilter?.dateTo &&
          new Date(w.date) > new Date(mergedFilter.dateTo)
        )
          return false;
        return true;
      }),
    [workouts, type, dateFrom, dateTo, filter],
  );

  function remove(id: string) {
    setWorkouts(workouts.filter((w) => w.id !== id));
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Workouts</h1>
      <div className="flex gap-2 mb-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 rounded border"
        >
          <option value="">All types</option>
          <option>Running</option>
          <option>Gym</option>
          <option>Yoga</option>
          <option>Cycling</option>
        </select>
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="p-2 rounded border"
        />
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="p-2 rounded border"
        />
      </div>
      <div className="space-y-2">
        {filtered.map((w) => (
          <div
            key={w.id}
            className="p-3 bg-white rounded shadow-sm flex justify-between items-center dark:bg-slate-800"
          >
            <div>
              <div className="font-medium">
                {w.type} — {w.durationMin} min
              </div>
              <div className="text-sm text-slate-500">
                {new Date(w.date).toLocaleString()} • {w.calories} kcal
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-sm text-slate-500">{w.status}</div>
              <button className="text-red-600" onClick={() => remove(w.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
