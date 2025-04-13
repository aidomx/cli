import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/bin/index.ts'],
  format: ['cjs'],
  target: 'esnext',
  outDir: 'dist',
  splitting: false,
  minify: true,
  sourcemap: true,
  dts: true,
  clean: true,
  shims: true,
})
