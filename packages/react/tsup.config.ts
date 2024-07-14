import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  target: 'node18',
  clean: true,
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: true,
  platform: 'node',
  shims: true,
})
