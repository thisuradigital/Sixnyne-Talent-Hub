import { isWeekend, differenceInDays, addDays, startOfDay, format } from 'date-fns';

/**
 * Check if a date is a holiday based on the provided holiday dates
 *
 * @param date - The date to check
 * @param holidayDates - Array of holiday date strings in YYYY-MM-DD format
 * @returns true if it's a holiday, false otherwise
 */
export const isHolidayDate = (date: Date, holidayDates: string[]): boolean => {
  const dateStr = format(date, 'yyyy-MM-dd');
  return holidayDates.includes(dateStr);
};

/**
 * Calculate the number of working days between two dates.
 * Working days are Monday through Friday (excludes weekends and holidays).
 *
 * @param startDate - The start date
 * @param endDate - The end date (defaults to now)
 * @param holidayDates - Optional array of holiday date strings in YYYY-MM-DD format
 * @returns The number of working days between the two dates
 */
export const calculateWorkingDays = (
  startDate: Date | number,
  endDate: Date | number = new Date(),
  holidayDates: string[] = []
): number => {
  const start = startOfDay(new Date(startDate));
  const end = startOfDay(new Date(endDate));

  // If end is before start, return 0
  if (end < start) return 0;

  const totalDays = differenceInDays(end, start);

  if (totalDays === 0) return 0;

  let workingDays = 0;

  for (let i = 1; i <= totalDays; i++) {
    const currentDay = addDays(start, i);
    if (!isWeekend(currentDay) && !isHolidayDate(currentDay, holidayDates)) {
      workingDays++;
    }
  }

  return workingDays;
};

/**
 * Check if a date is a working day (Monday through Friday, not a holiday)
 *
 * @param date - The date to check
 * @param holidayDates - Optional array of holiday date strings in YYYY-MM-DD format
 * @returns true if it's a working day, false otherwise
 */
export const isWorkingDay = (date: Date | number, holidayDates: string[] = []): boolean => {
  const d = new Date(date);
  return !isWeekend(d) && !isHolidayDate(d, holidayDates);
};

/**
 * Get the timestamp for N working days ago from a given date
 *
 * @param workingDays - Number of working days to go back
 * @param fromDate - The starting date (defaults to now)
 * @param holidayDates - Optional array of holiday date strings in YYYY-MM-DD format
 * @returns The timestamp for N working days ago
 */
export const getWorkingDaysAgo = (
  workingDays: number,
  fromDate: Date | number = new Date(),
  holidayDates: string[] = []
): number => {
  let date = startOfDay(new Date(fromDate));
  let daysCount = 0;

  while (daysCount < workingDays) {
    date = addDays(date, -1);
    if (!isWeekend(date) && !isHolidayDate(date, holidayDates)) {
      daysCount++;
    }
  }

  return date.getTime();
};

/**
 * Format working days into a human-readable string
 *
 * @param days - Number of working days
 * @returns Formatted string like "1 working day" or "3 working days"
 */
export const formatWorkingDays = (days: number): string => {
  if (days === 1) {
    return '1 working day';
  }
  return `${days} working days`;
};
