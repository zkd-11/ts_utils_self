/**
 * Number utility functions
 */

/**
 * Generate random number between min and max
 */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Round number to specified decimal places
 */
export function roundTo(num: number, decimals: number): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * Check if number is even
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Check if number is odd
 */
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * Clamp number between min and max
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/**
 * Convert number to percentage string
 */
export function toPercentage(num: number, decimals = 2): string {
  return `${(num * 100).toFixed(decimals)}%`;
}