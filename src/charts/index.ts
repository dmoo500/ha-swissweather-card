export function formatDateToWeekDay(dateStr: string, locale?: string | null): string {
  const date = new Date(dateStr);
  const normalizedLocale = typeof locale === 'string' ? locale.replace(/_/g, '-') : 'en';

  try {
    return date.toLocaleDateString(normalizedLocale, { weekday: 'short' });
  } catch {
    return date.toLocaleDateString('en', { weekday: 'short' });
  }
}
