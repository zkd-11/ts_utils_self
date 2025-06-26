/**
 * 数组工具函数
 */

/**
 * 数组去重
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * 数组分块
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * 数组扁平化
 */
export function flatten<T>(arr: (T | T[])[]): T[] {
  return arr.reduce<T[]>((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

/**
 * 获取随机元素
 */
export function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 数组洗牌
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}