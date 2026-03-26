export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("sr-RS", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) {
    return `${mins} min`;
  }

  return `${hours} h ${mins} min`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("sr-RS").format(value);
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}
