export function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("sr-RS");
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("sr-RS").format(value);
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  if (!h) {
    return `${m}m`;
  }

  return `${h}h ${m}m`;
}
