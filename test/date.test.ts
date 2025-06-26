import { formatDate, isToday, daysBetween, addDays } from '../src/date';

describe('Date Utils', () => {
  describe('formatDate', () => {
    test('should format date with default format', () => {
      const date = new Date('2023-01-15');
      expect(formatDate(date)).toBe('2023-01-15');
    });

    test('should format date with custom format', () => {
      const date = new Date('2023-01-15 14:30:45');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2023-01-15 14:30:45');
    });

    test('should handle string dates', () => {
      expect(formatDate('2023-01-15')).toBe('2023-01-15');
    });

    test('should handle timestamp', () => {
      const timestamp = new Date('2023-01-15').getTime();
      expect(formatDate(timestamp)).toBe('2023-01-15');
    });
  });

  describe('isToday', () => {
    test('should return true for today', () => {
      const today = new Date();
      expect(isToday(today)).toBe(true);
    });

    test('should return false for other dates', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(isToday(yesterday)).toBe(false);
    });
  });

  describe('daysBetween', () => {
    test('should calculate days between dates', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-05');
      expect(daysBetween(date1, date2)).toBe(4);
    });

    test('should handle reverse order', () => {
      const date1 = new Date('2023-01-05');
      const date2 = new Date('2023-01-01');
      expect(daysBetween(date1, date2)).toBe(4);
    });
  });

  describe('addDays', () => {
    test('should add days to date', () => {
      const date = new Date('2023-01-01');
      const result = addDays(date, 5);
      expect(result.getDate()).toBe(6);
    });

    test('should subtract days with negative number', () => {
      const date = new Date('2023-01-10');
      const result = addDays(date, -5);
      expect(result.getDate()).toBe(5);
    });
  });
});