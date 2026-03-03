import { useState } from "react";
import { users } from "../data/mock";

const Users = () => {
  const [q, setQ] = useState("");
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(q.toLowerCase()) ||
      u.email.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <div className="mb-4 flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search user"
          className="px-3 py-2 border rounded w-64"
        />
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-slate-50 text-left text-sm text-slate-600">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Plan</th>
              <th className="p-3">Status</th>
              <th className="p-3">Last Workout</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.plan}</td>
                <td className="p-3">{u.status}</td>
                <td className="p-3">{u.lastWorkout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
