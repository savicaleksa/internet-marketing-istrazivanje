import { useMemo, useState } from "react";
import { workouts as initialWorkouts, users, type Workout } from "../data/mock";

function paginate<T>(arr: T[], page: number, size: number) {
  const start = (page - 1) * size;
  return arr.slice(start, start + size);
}

export default function Workouts() {
  const [filterType, setFilterType] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [rows, setRows] = useState<Workout[]>(initialWorkouts);
  const [editing, setEditing] = useState<Workout | null>(null);

  const filtered = useMemo(
    () => rows.filter((r) => !filterType || r.type === filterType),
    [rows, filterType],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = paginate(filtered, page, pageSize);

  function save(w: Workout) {
    setRows((prev) =>
      prev.some((x) => x.id === w.id)
        ? prev.map((x) => (x.id === w.id ? w : x))
        : [w, ...prev],
    );
    setEditing(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Workouts</h2>
        <div className="flex gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-2 py-1 border rounded"
          >
            <option value="">All types</option>
            <option>Running</option>
            <option>Gym</option>
            <option>Yoga</option>
            <option>Cycling</option>
          </select>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() =>
              setEditing({
                id: Date.now().toString(),
                userId: users[0].id,
                type: "Running",
                duration: 30,
                calories: 200,
                date: new Date().toISOString(),
                status: "Completed",
              })
            }
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-white border rounded overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-2">User</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((w) => (
              <tr key={w.id} className="border-t">
                <td className="p-2">
                  {users.find((u) => u.id === w.userId)?.name}
                </td>
                <td>{w.type}</td>
                <td>{w.duration}m</td>
                <td>{w.calories}</td>
                <td>{new Date(w.date).toLocaleDateString()}</td>
                <td>
                  <button
                    className="px-2 py-1 mr-2 text-sm border rounded"
                    onClick={() => setEditing(w)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 text-sm border rounded"
                    onClick={() =>
                      setRows((prev) => prev.filter((x) => x.id !== w.id))
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          Page {page} / {pageCount}
        </div>
        <div className="space-x-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-2 py-1 border rounded"
          >
            Prev
          </button>
          <button
            disabled={page >= pageCount}
            onClick={() => setPage((p) => p + 1)}
            className="px-2 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-4 rounded w-96">
            <h3 className="font-semibold mb-2">Edit Workout</h3>
            <div className="space-y-2">
              <select
                className="w-full border px-2 py-1"
                value={editing.userId}
                onChange={(e) =>
                  setEditing({ ...editing, userId: e.target.value })
                }
              >
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
              </select>
              <input
                className="w-full border px-2 py-1"
                value={editing.type}
                onChange={(e) =>
                  setEditing({ ...editing, type: e.target.value })
                }
              />
              <div className="flex gap-2">
                <input
                  className="flex-1 border px-2 py-1"
                  type="number"
                  value={editing.duration}
                  onChange={(e) =>
                    setEditing({ ...editing, duration: Number(e.target.value) })
                  }
                />
                <input
                  className="flex-1 border px-2 py-1"
                  type="number"
                  value={editing.calories}
                  onChange={(e) =>
                    setEditing({ ...editing, calories: Number(e.target.value) })
                  }
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                  onClick={() => save(editing)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
