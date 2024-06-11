import babel from 'rollup-plugin-babel';


export default {
    entry: 'app/index.js',
    dest: 'dist/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  };