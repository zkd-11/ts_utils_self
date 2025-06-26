import { $, $$, addClass, removeClass, toggleClass, setStyle, createElement } from '../src/dom';

describe('DOM Utils', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('$', () => {
    test('should call querySelector', () => {
      // 创建真实的DOM元素
      const testDiv = document.createElement('div');
      testDiv.className = 'test';
      document.body.appendChild(testDiv);
      
      const result = $('.test');
      
      expect(result).toBe(testDiv);
    });
  });

  describe('$$', () => {
    test('should call querySelectorAll', () => {
      // 创建多个真实的DOM元素
      const testDiv1 = document.createElement('div');
      const testDiv2 = document.createElement('div');
      testDiv1.className = 'test';
      testDiv2.className = 'test';
      document.body.appendChild(testDiv1);
      document.body.appendChild(testDiv2);
      
      const result = $$('.test');
      
      expect(result).toHaveLength(2);
      expect(result[0]).toBe(testDiv1);
      expect(result[1]).toBe(testDiv2);
    });
  });

  describe('addClass', () => {
    test('should add class to element', () => {
      const element = document.createElement('div');
      addClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(true);
    });
  });

  describe('removeClass', () => {
    test('should remove class from element', () => {
      const element = document.createElement('div');
      element.classList.add('test-class');
      removeClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(false);
    });
  });

  describe('toggleClass', () => {
    test('should toggle class on element', () => {
      const element = document.createElement('div');
      toggleClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(true);
      
      toggleClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(false);
    });
  });

  describe('setStyle', () => {
    test('should set styles on element', () => {
      const element = document.createElement('div') as HTMLElement;
      setStyle(element, { color: 'red', fontSize: '16px' });
      
      expect(element.style.color).toBe('red');
      expect(element.style.fontSize).toBe('16px');
    });
  });

  describe('createElement', () => {
    test('should create element with attributes', () => {
      const element = createElement('div', {
        id: 'test-id',
        className: 'test-class'
      });
      
      expect(element.tagName).toBe('DIV');
      expect(element.id).toBe('test-id');
      expect(element.className).toBe('test-class');
    });
  });
});