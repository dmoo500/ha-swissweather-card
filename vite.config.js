import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2022',
    lib: {
      entry: 'src/index.ts',
      name: 'SwissWeatherCard',
      fileName: () => 'swissweather-card.js',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
      output: {
        format: 'es',
        entryFileNames: 'swissweather-card.js',
        dir: '.',
        inlineDynamicImports: true
      }
    },
    sourcemap: true,
    minify: true
  },
  esbuild: {
    target: 'es2022',
    format: 'esm'
  }
});
