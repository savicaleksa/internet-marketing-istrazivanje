import type { ReactNode } from "react";
import type { SortDirection } from "../utils/sort";

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
  sortable?: boolean;
}

interface TableProps<T extends object> {
  data: T[];
  columns: TableColumn<T>[];
  rowKey: (row: T) => string;
  sortKey?: keyof T;
  sortDirection?: SortDirection;
  onSort?: (key: keyof T) => void;
}

export function Table<T extends object>({
  data,
  columns,
  rowKey,
  sortKey,
  sortDirection,
  onSort,
}: TableProps<T>) {
  return (
    <div className="theme-surface w-full max-w-full overflow-x-auto rounded-xl border">
      <table className="min-w-[640px] w-full text-left text-sm md:min-w-[720px]">
        <thead className="theme-surface-soft theme-text-muted">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className="px-4 py-3 font-semibold">
                <button
                  type="button"
                  className={
                    column.sortable
                      ? "inline-flex items-center gap-1"
                      : "pointer-events-none"
                  }
                  onClick={() => column.sortable && onSort?.(column.key)}
                >
                  {column.header}
                  {column.sortable && sortKey === column.key && (
                    <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={rowKey(row)}
              className="border-t border-[var(--border-color)]"
            >
              {columns.map((column) => {
                const value = row[column.key];
                return (
                  <td
                    key={String(column.key)}
                    className="theme-text-secondary px-4 py-3"
                  >
                    {column.render ? column.render(value, row) : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
