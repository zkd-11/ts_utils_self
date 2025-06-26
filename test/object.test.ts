import { deepClone, isEmptyObject, get } from '../src/object';

describe('Object Utils', () => {
  describe('deepClone', () => {
    test('should clone simple objects', () => {
      const obj = { a: 1, b: 2 };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
    });

    test('should clone nested objects', () => {
      const obj = { a: { b: { c: 1 } } };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned.a).not.toBe(obj.a);
      expect(cloned.a.b).not.toBe(obj.a.b);
    });

    test('should clone arrays', () => {
      const arr = [1, [2, 3], { a: 4 }];
      const cloned = deepClone(arr);
      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
      expect(cloned[1]).not.toBe(arr[1]);
    });

    test('should clone dates', () => {
      const date = new Date('2023-01-01');
      const cloned = deepClone(date);
      expect(cloned).toEqual(date);
      expect(cloned).not.toBe(date);
    });

    test('should handle null and primitives', () => {
      expect(deepClone(null)).toBe(null);
      expect(deepClone(42)).toBe(42);
      expect(deepClone('string')).toBe('string');
    });
  });

  describe('isEmptyObject', () => {
    test('should return true for empty objects', () => {
      expect(isEmptyObject({})).toBe(true);
    });

    test('should return false for non-empty objects', () => {
      expect(isEmptyObject({ a: 1 })).toBe(false);
      expect(isEmptyObject({ a: undefined })).toBe(false);
    });
  });

  describe('get', () => {
    const obj = {
      a: {
        b: {
          c: 'value'
        }
      },
      x: null
    };

    test('should get nested values', () => {
      expect(get(obj, 'a.b.c')).toBe('value');
      expect(get(obj, 'a.b')).toEqual({ c: 'value' });
    });

    test('should return default value for missing paths', () => {
      expect(get(obj, 'a.b.d', 'default')).toBe('default');
      expect(get(obj, 'missing.path', 'default')).toBe('default');
    });

    test('should handle null values', () => {
      expect(get(obj, 'x.y', 'default')).toBe('default');
    });
  });
});