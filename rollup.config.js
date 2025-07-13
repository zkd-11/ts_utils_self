import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

export default {
  // 入口文件路径
  input: 'src/index.ts',
  // 输出配置
  output: [
    {
      file: 'dist/index.js', // 输出文件路径
      format: 'cjs', // CommonJS 格式，适用于 Node.js 环境
      exports: 'named' // 指定导出模式为命名导出
    },
    {
      file: 'dist/index.esm.js', // 输出文件路径
      format: 'es' // ES Module 格式，适用于现代浏览器和打包工具
    },
    {
      file: 'dist/index.umd.js', // 输出文件路径
      format: 'umd', // Universal Module Definition 格式，兼容 AMD、CommonJS 和全局变量
      name: 'UtilsSelf', // UMD 格式下的全局变量名
      globals: {} // 外部依赖的全局变量映射
    }
  ],
  // 插件配置
  plugins: [
    del({ targets: 'dist/*' }), // 在构建开始前清理 dist 目录
    resolve(),
    commonjs(), // 将 CommonJS 模块转换为 ES6
    typescript({ // TypeScript 编译配置
      tsconfig: './tsconfig.json', // TypeScript 配置文件路径
    })
  ]
};