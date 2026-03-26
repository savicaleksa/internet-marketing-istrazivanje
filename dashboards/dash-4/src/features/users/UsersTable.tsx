import { Table, type TableColumn } from "../../components/Table";
import type { User } from "../../types";
import { formatDate } from "../../utils/format";
import type { SortDirection } from "../../utils/sort";

interface UsersTableProps {
  users: User[];
  sortDirection: SortDirection;
  onSort: (key: keyof User) => void;
}

const columns: TableColumn<User>[] = [
  { key: "name", header: "Name", sortable: true },
  {
    key: "email",
    header: "Email",
    render: (value) => <span className="break-all">{String(value)}</span>,
  },
  { key: "plan", header: "Plan" },
  {
    key: "status",
    header: "Status",
    render: (value) => (
      <span
        className={[
          "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
          value === "Active"
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700",
        ].join(" ")}
      >
        {String(value)}
      </span>
    ),
  },
  {
    key: "lastWorkout",
    header: "Last Workout",
    render: (value) => formatDate(String(value)),
  },
];

export function UsersTable({ users, sortDirection, onSort }: UsersTableProps) {
  return (
    <>
      <div className="md:hidden space-y-3">
        {users.map((user) => (
          <article
            key={user.id}
            className="theme-surface rounded-xl border p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="theme-text-primary font-semibold">{user.name}</p>
                <p className="theme-text-muted break-all text-sm">
                  {user.email}
                </p>
              </div>
              <span
                className={[
                  "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
                  user.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700",
                ].join(" ")}
              >
                {user.status}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="theme-text-muted">Plan</p>
                <p className="theme-text-secondary font-medium">{user.plan}</p>
              </div>
              <div>
                <p className="theme-text-muted">Last Workout</p>
                <p className="theme-text-secondary font-medium">
                  {formatDate(user.lastWorkout)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden md:block">
        <Table
          data={users}
          columns={columns}
          rowKey={(user) => user.id}
          sortKey="name"
          sortDirection={sortDirection}
          onSort={onSort}
        />
      </div>
    </>
  );
}
