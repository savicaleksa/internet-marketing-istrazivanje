import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <label
      htmlFor={id}
      className="theme-text-secondary flex flex-col gap-2 text-sm font-medium"
    >
      {label && <span>{label}</span>}
      <input
        id={id}
        className={`theme-surface theme-text-primary rounded-lg border px-3 py-2 text-sm outline-none ring-sky-500 transition placeholder:text-[var(--text-muted)] focus:ring-2 ${className}`}
        {...props}
      />
    </label>
  );
}
