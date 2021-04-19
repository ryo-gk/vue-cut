import vue from 'rollup-plugin-vue'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import buble from '@rollup/plugin-buble'
import ts from '@rollup/plugin-typescript'

export default {
  input: 'lib/index.ts',
  output: {
    name: 'VueThousandSeparator',
    exports: 'named',
    globals: {
      vue: 'Vue'
    },
    sourcemap: true
  },
  external: ['Vue', 'autonumeric'],
  plugins: [
    nodeResolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    commonjs(),
    buble(),
    ts()
  ]
}
