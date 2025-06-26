/**
 * 浏览器存储工具函数
 */

/**
 * localStorage 工具
 */
export const local = {
  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('localStorage set error:', error);
    }
  },
  
  get<T = any>(key: string, defaultValue?: T): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch (error) {
      console.error('localStorage get error:', error);
      return defaultValue || null;
    }
  },
  
  remove(key: string): void {
    localStorage.removeItem(key);
  },
  
  clear(): void {
    localStorage.clear();
  }
};

/**
 * sessionStorage 工具
 */
export const session = {
  set(key: string, value: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('sessionStorage set error:', error);
    }
  },
  
  get<T = any>(key: string, defaultValue?: T): T | null {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch (error) {
      console.error('sessionStorage get error:', error);
      return defaultValue || null;
    }
  },
  
  remove(key: string): void {
    sessionStorage.removeItem(key);
  },
  
  clear(): void {
    sessionStorage.clear();
  }
};