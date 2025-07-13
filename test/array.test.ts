import { unique, chunk, flatten, randomElement, shuffle, intersection } from '../src/array';

describe('Array Utils', () => {
  describe('unique', () => {
    test('should remove duplicates', () => {
      expect(unique([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(unique(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('should handle empty array', () => {
      expect(unique([])).toEqual([]);
    });

    test('should handle array without duplicates', () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('chunk', () => {
    test('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    });

    test('should handle empty array', () => {
      expect(chunk([], 2)).toEqual([]);
    });

    test('should handle size larger than array', () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });
  });

  describe('flatten', () => {
    test('should flatten nested arrays', () => {
      expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
      expect(flatten(['a', ['b', 'c'], 'd'])).toEqual(['a', 'b', 'c', 'd']);
    });

    test('should handle empty array', () => {
      expect(flatten([])).toEqual([]);
    });

    test('should handle already flat array', () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('randomElement', () => {
    test('should return element from array', () => {
      const arr = [1, 2, 3, 4, 5];
      const element = randomElement(arr);
      expect(arr).toContain(element);
    });

    test('should return single element from single-item array', () => {
      expect(randomElement(['only'])).toBe('only');
    });
  });

  describe('shuffle', () => {
    test('should return array of same length', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled).toHaveLength(arr.length);
    });

    test('should contain same elements', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled.sort()).toEqual(arr.sort());
    });

    test('should not modify original array', () => {
      const arr = [1, 2, 3, 4, 5];
      const original = [...arr];
      shuffle(arr);
      expect(arr).toEqual(original);
    });
  });

  test('intersection', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  })
});