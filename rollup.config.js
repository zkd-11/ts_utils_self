import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'es'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'UtilsSelf',
      globals: {}
    }
  ],
  plugins: [
    del({ targets: 'dist/*' }), // 在构建开始前清理 dist 目录
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
};