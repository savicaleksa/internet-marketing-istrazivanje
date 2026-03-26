import { useMemo, useState } from "react";
import { mockUsers } from "../features/data/mockData";
import type { PlanType, User } from "../types";
import { sortByKey, type SortDirection } from "../utils/sort";

export function useUsers() {
  const [users] = useState<User[]>(mockUsers);
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState<PlanType | "All">("All");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filteredUsers = useMemo(() => {
    const term = search.trim().toLowerCase();

    const bySearch = users.filter((user) => {
      if (!term) {
        return true;
      }

      return (
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    });

    const byPlan =
      planFilter === "All"
        ? bySearch
        : bySearch.filter((user) => user.plan === planFilter);

    return sortByKey(byPlan, "name", sortDirection);
  }, [users, search, planFilter, sortDirection]);

  return {
    users: filteredUsers,
    search,
    setSearch,
    planFilter,
    setPlanFilter,
    sortDirection,
    setSortDirection,
  };
}
