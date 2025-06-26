/**
 * Date utility functions
 */

/**
 * Format date to string
 */
export function formatDate(date: Date | string | number, format = 'YYYY-MM-DD'): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Check if date is today
 */
export function isToday(date: Date | string | number): boolean {
  const today = new Date();
  const d = new Date(date);
  return d.toDateString() === today.toDateString();
}

/**
 * Get days between two dates
 */
export function daysBetween(date1: Date | string | number, date2: Date | string | number): number {
  const oneDay = 24 * 60 * 60 * 1000;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.round(Math.abs((d1.getTime() - d2.getTime()) / oneDay));
}

/**
 * Add days to date
 */
export function addDays(date: Date | string | number, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}