import { capitalize, toCamelCase, isEmpty, truncate, randomString } from '../src/string';

describe('String Utils', () => {
  describe('capitalize', () => {
    test('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    test('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('should not change already capitalized string', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });
  });

  describe('toCamelCase', () => {
    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
      expect(toCamelCase('my-test-string')).toBe('myTestString');
    });

    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
      expect(toCamelCase('my_test_string')).toBe('myTestString');
    });

    test('should convert spaces to camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
    });

    test('should handle empty string', () => {
      expect(toCamelCase('')).toBe('');
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty strings', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t\n')).toBe(true);
    });

    test('should return false for non-empty strings', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty(' a ')).toBe(false);
    });
  });

  describe('truncate', () => {
    test('should truncate long strings', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
      expect(truncate('test string', 4)).toBe('test...');
    });

    test('should not truncate short strings', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should use custom suffix', () => {
      expect(truncate('hello world', 5, '---')).toBe('hello---');
    });
  });

  describe('randomString', () => {
    test('should generate string of correct length', () => {
      expect(randomString(5)).toHaveLength(5);
      expect(randomString(10)).toHaveLength(10);
    });

    test('should generate different strings', () => {
      const str1 = randomString(10);
      const str2 = randomString(10);
      expect(str1).not.toBe(str2);
    });

    test('should contain only valid characters', () => {
      const str = randomString(100);
      expect(str).toMatch(/^[A-Za-z0-9]+$/);
    });
  });
});