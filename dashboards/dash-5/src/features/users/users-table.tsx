"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import type { SubscriptionPlan, User } from "@/types";
import { formatDate } from "@/utils/format";
import type { SortDirection } from "@/utils/sort";
import { ArrowUpDown, Eye } from "lucide-react";

interface UsersTableProps {
  users: User[];
  search: string;
  onSearchChange: (value: string) => void;
  planFilter: SubscriptionPlan | "all";
  onPlanFilterChange: (value: SubscriptionPlan | "all") => void;
  sortDirection: SortDirection;
  onSortDirectionChange: (value: SortDirection) => void;
}

function StatusBadge({ status }: { status: User["status"] }) {
  return status === "Active" ? (
    <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">
      Active
    </Badge>
  ) : (
    <Badge variant="secondary">Suspended</Badge>
  );
}

export function UsersTable({
  users,
  search,
  onSearchChange,
  planFilter,
  onPlanFilterChange,
  sortDirection,
  onSortDirectionChange,
}: UsersTableProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <Input
          placeholder="Pretraga po imenu ili emailu"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <Select
          value={planFilter}
          onValueChange={(value) =>
            onPlanFilterChange(value as SubscriptionPlan | "all")
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Filtriraj po planu" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Svi planovi</SelectItem>
            <SelectItem value="Free">Free</SelectItem>
            <SelectItem value="Pro">Pro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="hidden overflow-hidden rounded-xl border border-border/70 md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button
                  variant="ghost"
                  className="h-auto px-0 text-xs font-semibold uppercase tracking-wide"
                  onClick={() =>
                    onSortDirectionChange(
                      sortDirection === "asc" ? "desc" : "asc",
                    )
                  }
                >
                  Name <ArrowUpDown className="ml-2 size-3" />
                </Button>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last workout</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">{user.plan}</Badge>
                </TableCell>
                <TableCell>
                  <StatusBadge status={user.status} />
                </TableCell>
                <TableCell>{formatDate(user.lastWorkout)}</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger
                      render={<Button variant="outline" size="sm" />}
                    >
                      <Eye className="mr-1 size-4" /> View
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{user.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-2 text-sm">
                        <p>Email: {user.email}</p>
                        <p>Plan: {user.plan}</p>
                        <p>Status: {user.status}</p>
                        <p>Last workout: {formatDate(user.lastWorkout)}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-3 md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border border-border/70 bg-card p-3"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <StatusBadge status={user.status} />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Plan</p>
                <p className="font-medium">{user.plan}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last workout</p>
                <p className="font-medium">{formatDate(user.lastWorkout)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
