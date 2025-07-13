module.exports = {
  // 预设配置，使用 ts-jest 来处理 TypeScript 文件
  preset: 'ts-jest',
  
  // 测试环境，使用 jsdom 模拟浏览器环境
  testEnvironment: 'jsdom',
  
  // 全局配置项，这里配置 ts-jest 使用的 TypeScript 配置文件
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  
  // 测试文件的根目录，包含源码和测试文件目录
  roots: ['<rootDir>/src', '<rootDir>/test'],
  
  // 测试文件匹配模式，匹配 __tests__ 目录下的 ts 文件和带有 spec/test 后缀的 ts 文件
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  
  // 收集测试覆盖率的文件范围，包含 src 下所有 ts 文件，但排除 index.ts
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/index.ts'
  ],
  
  // 测试覆盖率阈值设置，要求分支、函数、行数和语句的覆盖率都达到 70%
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  
  // 测试启动前需要运行的配置文件
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts']
};