import type { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
}

export function Select({
  label,
  options,
  id,
  className = "",
  ...props
}: SelectProps) {
  return (
    <label
      htmlFor={id}
      className="theme-text-secondary flex flex-col gap-2 text-sm font-medium"
    >
      {label && <span>{label}</span>}
      <select
        id={id}
        className={`theme-surface theme-text-primary rounded-lg border px-3 py-2 text-sm outline-none ring-sky-500 transition focus:ring-2 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
