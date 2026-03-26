import type { PropsWithChildren } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Card({
  title,
  subtitle,
  className = "",
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <section
      className={`theme-surface rounded-xl border p-5 shadow-sm ${className}`}
    >
      {(title || subtitle) && (
        <header className="mb-4">
          {title && (
            <h2 className="theme-text-primary text-lg font-semibold">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="theme-text-muted mt-1 text-sm">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
