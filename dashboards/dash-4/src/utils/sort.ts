export type SortDirection = "asc" | "desc";

export function sortByKey<T, K extends keyof T>(
  list: T[],
  key: K,
  direction: SortDirection,
): T[] {
  const sorted = [...list].sort((a, b) => {
    const left = String(a[key]);
    const right = String(b[key]);
    return left.localeCompare(right);
  });
  return direction === "asc" ? sorted : sorted.reverse();
}
