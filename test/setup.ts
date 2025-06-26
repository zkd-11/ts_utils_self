// Jest setup file

// Mock console.error to avoid noise in tests
global.console = {
  ...console,
  error: jest.fn()
};

// Mock window.localStorage and sessionStorage
const mockStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

Object.defineProperty(window, 'localStorage', {
  value: mockStorage
});

Object.defineProperty(window, 'sessionStorage', {
  value: mockStorage
});