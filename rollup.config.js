export default {
  input: 'src/index.js',
  output: [
    {
      format: 'es',
      file: 'dist/kdu-wc-wrapper.js'
    },
    {
      format: 'iife',
      name: 'wrapKduWebComponent',
      file: 'dist/kdu-wc-wrapper.global.js'
    }
  ]
}
