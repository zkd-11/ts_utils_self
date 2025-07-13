import { randomBetween, roundTo, isEven, isOdd, clamp, toPercentage, isZero } from '../src/number';

describe('Number Utils', () => {
  describe('randomBetween', () => {
    test('should generate number within range', () => {
      for (let i = 0; i < 100; i++) {
        const result = randomBetween(1, 10);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
      }
    });

    test('should handle same min and max', () => {
      expect(randomBetween(5, 5)).toBe(5);
    });
  });

  describe('roundTo', () => {
    test('should round to specified decimals', () => {
      expect(roundTo(3.14159, 2)).toBe(3.14);
      expect(roundTo(3.14159, 4)).toBe(3.1416);
    });

    test('should handle zero decimals', () => {
      expect(roundTo(3.7, 0)).toBe(4);
    });
  });

  describe('isEven', () => {
    test('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
    });
  });

  describe('isOdd', () => {
    test('should return true for odd numbers', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(3)).toBe(true);
    });

    test('should return false for even numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(4)).toBe(false);
      expect(isOdd(0)).toBe(false);
    });
  });

  describe('isZero', () => {
    test('should return true for zero', () => {
      // expect(isZero(1)).not.toBe(true);
      expect(isZero(0)).toBe(true);
    });
  })

  describe('clamp', () => {
    test('should clamp number within range', () => {
      expect(clamp(5, 1, 10)).toBe(5);
      expect(clamp(-5, 1, 10)).toBe(1);
      expect(clamp(15, 1, 10)).toBe(10);
    });
  });

  describe('toPercentage', () => {
    test('should convert to percentage', () => {
      expect(toPercentage(0.5)).toBe('50.00%');
      expect(toPercentage(0.1234, 1)).toBe('12.3%');
    });
  });
});