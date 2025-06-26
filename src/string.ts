/**
 * 字符串工具函数
 */

/**
 * 首字母大写
 */
export function capitalize(str: string): string {
  if (!str || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 转换为驼峰命名
 */
export function toCamelCase(str: string): string {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

/**
 * 检查字符串是否为空
 */
export function isEmpty(str: string): boolean {
  return !str || str.trim().length === 0;
}

/**
 * 截断字符串
 */
export function truncate(str: string, length: number, suffix = '...'): string {
  if (str.length <= length) return str;
  return str.substring(0, length) + suffix;
}

/**
 * 生成随机字符串
 */
export function randomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}