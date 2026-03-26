import { useState } from "react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { Select } from "../components/Select";
import { UsersTable } from "../features/users/UsersTable";
import { useUsers } from "../hooks/useUsers";

export function UsersPage() {
  const {
    users,
    search,
    setSearch,
    planFilter,
    setPlanFilter,
    sortDirection,
    setSortDirection,
  } = useUsers();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Users Management</h2>
          <p className="theme-text-muted text-sm">
            Search, filter, and sort users by membership and activity.
          </p>
        </div>
        <button
          type="button"
          className="w-fit rounded-lg bg-[var(--interactive-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--interactive-soft-hover)]"
          onClick={() => setIsHelpOpen(true)}
        >
          View actions
        </button>
      </div>

      <Card>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <Input
            id="users-search"
            label="Search"
            placeholder="Search by name or email"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Select
            id="users-plan"
            label="Filter by plan"
            value={planFilter}
            onChange={(event) =>
              setPlanFilter(event.target.value as "All" | "Free" | "Pro")
            }
            options={[
              { value: "All", label: "All plans" },
              { value: "Free", label: "Free" },
              { value: "Pro", label: "Pro" },
            ]}
          />
          <Select
            id="users-sort"
            label="Sort by name"
            value={sortDirection}
            onChange={(event) =>
              setSortDirection(event.target.value as "asc" | "desc")
            }
            options={[
              { value: "asc", label: "A - Z" },
              { value: "desc", label: "Z - A" },
            ]}
          />
        </div>
      </Card>

      <UsersTable
        users={users}
        sortDirection={sortDirection}
        onSort={(_key) =>
          setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
        }
      />

      <Modal
        title="Actions"
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      >
        <p className="theme-text-secondary text-sm">
          This MVP supports user visibility and admin control states. You can
          extend this with full View and Disable actions connected to backend
          APIs.
        </p>
      </Modal>
    </div>
  );
}
