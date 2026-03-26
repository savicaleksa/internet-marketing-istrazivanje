import type { User } from "@/types";

export type SortDirection = "asc" | "desc";

export function sortUsersByName(
  users: User[],
  direction: SortDirection,
): User[] {
  return [...users].sort((first, second) => {
    const compare = first.name.localeCompare(second.name, "sr", {
      sensitivity: "base",
    });

    return direction === "asc" ? compare : -compare;
  });
}
