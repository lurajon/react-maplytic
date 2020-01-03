import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';


export default {
  input: './src/index.js',
  moduleName: 'react-maplytic',
  sourcemap: true,

  targets: [
    {
      dest: './dist/react-maplytic.js',
      format: 'umd'
    },
    {
      dest: 'dist/react-maplytic.module.js',
      format: 'es'
    }
  ],

  plugins: [
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    resolve(),
    commonjs()
  ],

  external: ['react', 'react-dom'],

  globals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
