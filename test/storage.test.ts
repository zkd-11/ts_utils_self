import { local, session } from '../src/storage';

// Mock localStorage and sessionStorage
const mockStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

Object.defineProperty(window, 'localStorage', { value: mockStorage });
Object.defineProperty(window, 'sessionStorage', { value: mockStorage });

describe('Storage Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.error = jest.fn();
  });

  describe('local storage', () => {
    describe('set', () => {
      test('should set item in localStorage', () => {
        local.set('key', 'value');
        expect(localStorage.setItem).toHaveBeenCalledWith('key', '"value"');
      });

      test('should handle objects', () => {
        const obj = { a: 1, b: 2 };
        local.set('key', obj);
        expect(localStorage.setItem).toHaveBeenCalledWith('key', JSON.stringify(obj));
      });

      test('should handle errors', () => {
        (localStorage.setItem as jest.Mock).mockImplementation(() => {
          throw new Error('Storage error');
        });
        
        local.set('key', 'value');
        expect(console.error).toHaveBeenCalled();
      });
    });

    describe('get', () => {
      test('should get item from localStorage', () => {
        (localStorage.getItem as jest.Mock).mockReturnValue('"value"');
        
        const result = local.get('key');
        expect(localStorage.getItem).toHaveBeenCalledWith('key');
        expect(result).toBe('value');
      });

      test('should return default value for missing key', () => {
        (localStorage.getItem as jest.Mock).mockReturnValue(null);
        
        const result = local.get('key', 'default');
        expect(result).toBe('default');
      });

      test('should handle parse errors', () => {
        (localStorage.getItem as jest.Mock).mockReturnValue('invalid json');
        
        const result = local.get('key', 'default');
        expect(result).toBe('default');
        expect(console.error).toHaveBeenCalled();
      });
    });

    describe('remove', () => {
      test('should remove item from localStorage', () => {
        local.remove('key');
        expect(localStorage.removeItem).toHaveBeenCalledWith('key');
      });
    });

    describe('clear', () => {
      test('should clear localStorage', () => {
        local.clear();
        expect(localStorage.clear).toHaveBeenCalled();
      });
    });
  });

  // Similar tests for session storage would follow the same pattern
});