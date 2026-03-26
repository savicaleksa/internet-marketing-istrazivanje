import { Card } from "../components/Card";
import { Select } from "../components/Select";
import { WorkoutsTable } from "../features/workouts/WorkoutsTable";
import { useWorkouts } from "../hooks/useWorkouts";

export function WorkoutsPage() {
  const { workouts, statusFilter, setStatusFilter, typeFilter, setTypeFilter } =
    useWorkouts();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold">Workouts</h2>
        <p className="theme-text-muted text-sm">
          Monitor workout history, performance volume, and completion status.
        </p>
      </div>

      <Card>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Select
            id="workout-type"
            label="Workout type"
            value={typeFilter}
            onChange={(event) =>
              setTypeFilter(
                event.target.value as
                  | "All"
                  | "Running"
                  | "Gym"
                  | "Yoga"
                  | "Cycling",
              )
            }
            options={[
              { value: "All", label: "All types" },
              { value: "Running", label: "Running" },
              { value: "Gym", label: "Gym" },
              { value: "Yoga", label: "Yoga" },
              { value: "Cycling", label: "Cycling" },
            ]}
          />
          <Select
            id="workout-status"
            label="Status"
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(
                event.target.value as "All" | "Completed" | "In Progress",
              )
            }
            options={[
              { value: "All", label: "All statuses" },
              { value: "Completed", label: "Completed" },
              { value: "In Progress", label: "In Progress" },
            ]}
          />
        </div>
      </Card>

      <WorkoutsTable workouts={workouts} />
    </div>
  );
}
