"use client";

import { users as usersMock } from "@/data/mock-data";
import type { SubscriptionPlan } from "@/types";
import { sortUsersByName, type SortDirection } from "@/utils/sort";
import { useMemo, useState } from "react";

export function useUsers() {
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState<SubscriptionPlan | "all">("all");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [planOverrides, setPlanOverrides] = useState<
    Record<string, SubscriptionPlan>
  >({});

  const effectiveUsers = useMemo(
    () =>
      usersMock.map((user) => ({
        ...user,
        plan: planOverrides[user.id] ?? user.plan,
      })),
    [planOverrides],
  );

  const filteredUsers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const searched = effectiveUsers.filter((user) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        user.name.toLowerCase().includes(normalizedSearch) ||
        user.email.toLowerCase().includes(normalizedSearch)
      );
    });

    const filteredByPlan = searched.filter((user) => {
      return planFilter === "all" ? true : user.plan === planFilter;
    });

    return sortUsersByName(filteredByPlan, sortDirection);
  }, [effectiveUsers, planFilter, search, sortDirection]);

  const planStats = useMemo(() => {
    return {
      free: effectiveUsers.filter((user) => user.plan === "Free").length,
      pro: effectiveUsers.filter((user) => user.plan === "Pro").length,
    };
  }, [effectiveUsers]);

  const setUserPlan = (userId: string, plan: SubscriptionPlan) => {
    setPlanOverrides((current) => ({
      ...current,
      [userId]: plan,
    }));
  };

  return {
    users: filteredUsers,
    allUsers: effectiveUsers,
    search,
    setSearch,
    planFilter,
    setPlanFilter,
    sortDirection,
    setSortDirection,
    planStats,
    setUserPlan,
  };
}
