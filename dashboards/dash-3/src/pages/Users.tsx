import { useMemo, useState } from "react";
import { users as initialUsers, type User } from "../data/mock";

function paginate<T>(arr: T[], page: number, size: number) {
  const start = (page - 1) * size;
  return arr.slice(start, start + size);
}

export default function Users() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"name" | "email">("name");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const [rows, setRows] = useState<User[]>(initialUsers);
  const [editing, setEditing] = useState<User | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return rows
      .filter(
        (r) =>
          r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q),
      )
      .sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [rows, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = paginate(filtered, page, pageSize);

  function save(u: User) {
    setRows((prev) =>
      prev.some((x) => x.id === u.id)
        ? prev.map((x) => (x.id === u.id ? u : x))
        : [u, ...prev],
    );
    setEditing(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Users</h2>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search"
            className="px-3 py-1 border rounded"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="px-2 py-1 border rounded"
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
          </select>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() =>
              setEditing({
                id: Date.now().toString(),
                name: "",
                email: "",
                plan: "Free",
                status: "Active",
                lastWorkout: "",
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
              <th className="p-2">Name</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Last Workout</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.plan}</td>
                <td>{u.status}</td>
                <td>{new Date(u.lastWorkout).toLocaleDateString()}</td>
                <td>
                  <button
                    className="px-2 py-1 mr-2 text-sm border rounded"
                    onClick={() => setEditing(u)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 text-sm border rounded"
                    onClick={() =>
                      setRows((prev) => prev.filter((x) => x.id !== u.id))
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
            <h3 className="font-semibold mb-2">
              {editing.id ? "Edit" : "Add"} User
            </h3>
            <div className="space-y-2">
              <input
                className="w-full border px-2 py-1"
                placeholder="Name"
                value={editing.name}
                onChange={(e) =>
                  setEditing({ ...editing, name: e.target.value })
                }
              />
              <input
                className="w-full border px-2 py-1"
                placeholder="Email"
                value={editing.email}
                onChange={(e) =>
                  setEditing({ ...editing, email: e.target.value })
                }
              />
              <div className="flex gap-2">
                <select
                  className="border px-2 py-1"
                  value={editing.plan}
                  onChange={(e) =>
                    setEditing({ ...editing, plan: e.target.value as any })
                  }
                >
                  <option>Free</option>
                  <option>Pro</option>
                </select>
                <select
                  className="border px-2 py-1"
                  value={editing.status}
                  onChange={(e) =>
                    setEditing({ ...editing, status: e.target.value as any })
                  }
                >
                  <option>Active</option>
                  <option>Suspended</option>
                </select>
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
