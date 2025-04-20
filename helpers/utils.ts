// utils.ts
// Utility methods ONLY for random data, date formatting, etc.
// DO NOT add page-specific or business logic here

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function generateRandomString(length: number): string {
  return Math.random().toString(36).substring(2, length + 2);
}

export function addDaysToDate(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}
