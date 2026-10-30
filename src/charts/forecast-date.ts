export function getLocalForecastDateKey(datetime: string): string | undefined {
  const date = new Date(datetime);
  if (Number.isNaN(date.getTime())) return undefined;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function filterForecastToDateKeys<T extends { datetime: string }>(
  forecast: T[],
  dateKeys: Iterable<string>
): T[] {
  const dateKeySet = new Set(dateKeys);
  return forecast.filter(item => {
    const dateKey = getLocalForecastDateKey(item.datetime);
    return dateKey !== undefined && dateKeySet.has(dateKey);
  });
}
