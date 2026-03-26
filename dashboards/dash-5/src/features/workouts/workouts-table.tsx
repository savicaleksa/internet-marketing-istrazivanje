"use client";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Workout, WorkoutStatus, WorkoutType } from "@/types";
import { formatDate, formatDuration } from "@/utils/format";

interface WorkoutsTableProps {
  workouts: Workout[];
  typeFilter: WorkoutType | "all";
  onTypeFilterChange: (value: WorkoutType | "all") => void;
  statusFilter: WorkoutStatus | "all";
  onStatusFilterChange: (value: WorkoutStatus | "all") => void;
}

export function WorkoutsTable({
  workouts,
  typeFilter,
  onTypeFilterChange,
  statusFilter,
  onStatusFilterChange,
}: WorkoutsTableProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <Select
          value={typeFilter}
          onValueChange={(value) =>
            onTypeFilterChange(value as WorkoutType | "all")
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter po tipu" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Svi tipovi</SelectItem>
            <SelectItem value="Running">Running</SelectItem>
            <SelectItem value="Gym">Gym</SelectItem>
            <SelectItem value="Yoga">Yoga</SelectItem>
            <SelectItem value="Cycling">Cycling</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={statusFilter}
          onValueChange={(value) =>
            onStatusFilterChange(value as WorkoutStatus | "all")
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter po statusu" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Svi statusi</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="hidden overflow-hidden rounded-xl border border-border/70 md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Calories</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workouts.map((workout) => (
              <TableRow key={workout.id}>
                <TableCell className="font-medium">
                  {workout.userName}
                </TableCell>
                <TableCell>{workout.type}</TableCell>
                <TableCell>{formatDuration(workout.durationMinutes)}</TableCell>
                <TableCell>{workout.calories} kcal</TableCell>
                <TableCell>{formatDate(workout.date)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      workout.status === "Completed" ? "default" : "secondary"
                    }
                  >
                    {workout.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-3 md:hidden">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="rounded-xl border border-border/70 bg-card p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="font-semibold">{workout.userName}</p>
              <Badge
                variant={
                  workout.status === "Completed" ? "default" : "secondary"
                }
              >
                {workout.status}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <p className="text-muted-foreground">
                Type:{" "}
                <span className="font-medium text-foreground">
                  {workout.type}
                </span>
              </p>
              <p className="text-muted-foreground">
                Duration:{" "}
                <span className="font-medium text-foreground">
                  {formatDuration(workout.durationMinutes)}
                </span>
              </p>
              <p className="text-muted-foreground">
                Calories:{" "}
                <span className="font-medium text-foreground">
                  {workout.calories} kcal
                </span>
              </p>
              <p className="text-muted-foreground">
                Date:{" "}
                <span className="font-medium text-foreground">
                  {formatDate(workout.date)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
