// utils.ts
// Utility methods ONLY for random data, date formatting, etc.
// DO NOT add page-specific or business logic here

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '-');
};

export function generateRandomString(length: number): string {
  return Math.random().toString(36).substring(2, length + 2);
}

export const addDaysToDate = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};
