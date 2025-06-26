/**
 * DOM操作工具函数
 */

/**
 * 获取元素
 */
export function $(selector: string): Element | null {
  return document.querySelector(selector);
}

/**
 * 获取所有匹配元素
 */
export function $$(selector: string): NodeListOf<Element> {
  return document.querySelectorAll(selector);
}

/**
 * 添加CSS类
 */
export function addClass(element: Element, className: string): void {
  element.classList.add(className);
}

/**
 * 移除CSS类
 */
export function removeClass(element: Element, className: string): void {
  element.classList.remove(className);
}

/**
 * 切换CSS类
 */
export function toggleClass(element: Element, className: string): void {
  element.classList.toggle(className);
}

/**
 * 设置元素样式
 */
export function setStyle(element: HTMLElement, styles: Partial<CSSStyleDeclaration>): void {
  Object.assign(element.style, styles);
}

/**
 * 创建元素
 */
export function createElement(tag: string, attributes?: Record<string, string>, content?: string): HTMLElement {
  const element = document.createElement(tag);
  
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      // 特殊处理 className，将其转换为 class 属性
      if (key === 'className') {
        element.setAttribute('class', value);
      } else {
        element.setAttribute(key, value);
      }
    });
  }
  
  if (content) {
    element.textContent = content;
  }
  
  return element;
}