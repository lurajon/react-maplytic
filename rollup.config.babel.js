import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';

import pkg from './package.json';


export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name
    }
  ],
  sourcemap: true,

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
    commonjs({
        include: 'node_modules/**'
    }),
    json()
  ],

  external: ['react', 'react-dom', 'prop-types']
};
