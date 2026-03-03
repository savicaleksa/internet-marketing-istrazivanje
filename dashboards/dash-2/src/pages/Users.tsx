import { useMemo, useState } from "react";
import { User } from "../types";

function usePaged<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(1);
  const total = Math.max(1, Math.ceil(items.length / pageSize));
  const pageItems = items.slice((page - 1) * pageSize, page * pageSize);
  return { page, setPage, total, pageItems };
}

export default function Users({
  users,
  setUsers,
}: {
  users: User[];
  setUsers: (u: User[]) => void;
}) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"name" | "email">("name");
  const filtered = useMemo(
    () =>
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(q.toLowerCase()) ||
          u.email.toLowerCase().includes(q.toLowerCase()),
      ),
    [users, q],
  );
  const sorted = useMemo(
    () => [...filtered].sort((a, b) => a[sort].localeCompare(b[sort])),
    [filtered, sort],
  );
  const { page, setPage, total, pageItems } = usePaged(sorted, 10);

  function remove(id: string) {
    setUsers(users.filter((u) => u.id !== id));
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name or email"
          className="flex-1 p-2 rounded border"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
          className="p-2 rounded border"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow-sm dark:bg-slate-800">
        <table className="min-w-full">
          <thead className="text-left text-slate-500">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Plan</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Last Workout</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((u) => (
              <tr key={u.id} className="border-t last:border-b">
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.plan}</td>
                <td className="px-4 py-2">{u.status}</td>
                <td className="px-4 py-2">
                  {u.lastWorkout
                    ? new Date(u.lastWorkout).toLocaleDateString()
                    : "-"}
                </td>
                <td className="px-4 py-2">
                  <button className="text-red-600" onClick={() => remove(u.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button
          className="px-3 py-1 bg-slate-100 rounded"
          onClick={() => setPage(Math.max(1, page - 1))}
        >
          Prev
        </button>
        <div>
          Page {page} / {total}
        </div>
        <button
          className="px-3 py-1 bg-slate-100 rounded"
          onClick={() => setPage(Math.min(total, page + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
