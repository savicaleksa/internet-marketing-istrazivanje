import { Table, type TableColumn } from "../../components/Table";
import type { Workout } from "../../types";
import { formatDate, formatDuration, formatNumber } from "../../utils/format";

interface WorkoutsTableProps {
  workouts: Workout[];
}

const columns: TableColumn<Workout>[] = [
  { key: "user", header: "User" },
  { key: "type", header: "Type" },
  {
    key: "duration",
    header: "Duration",
    render: (value) => formatDuration(Number(value)),
  },
  {
    key: "calories",
    header: "Calories",
    render: (value) => formatNumber(Number(value)),
  },
  {
    key: "date",
    header: "Date",
    render: (value) => formatDate(String(value)),
  },
  {
    key: "status",
    header: "Status",
    render: (value) => (
      <span
        className={[
          "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
          value === "Completed"
            ? "bg-sky-100 text-sky-700"
            : "bg-violet-100 text-violet-700",
        ].join(" ")}
      >
        {String(value)}
      </span>
    ),
  },
];

export function WorkoutsTable({ workouts }: WorkoutsTableProps) {
  return (
    <Table data={workouts} columns={columns} rowKey={(workout) => workout.id} />
  );
}
