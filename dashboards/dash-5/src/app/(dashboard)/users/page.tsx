"use client";

import { UsersTable } from "@/features/users/users-table";
import { useUsers } from "@/hooks/use-users";

export default function UsersPage() {
  const {
    users,
    search,
    setSearch,
    planFilter,
    setPlanFilter,
    sortDirection,
    setSortDirection,
  } = useUsers();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-heading text-2xl font-bold">Users management</h1>
        <p className="text-sm text-muted-foreground">
          Pretraga, filtriranje i sortiranje korisnika kroz responzivni prikaz.
        </p>
      </div>

      <UsersTable
        users={users}
        search={search}
        onSearchChange={setSearch}
        planFilter={planFilter}
        onPlanFilterChange={setPlanFilter}
        sortDirection={sortDirection}
        onSortDirectionChange={setSortDirection}
      />
    </div>
  );
}
