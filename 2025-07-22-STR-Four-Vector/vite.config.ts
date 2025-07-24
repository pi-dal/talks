import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.SLIDEV_BASE || '/2025-07-22-STR-Four-Vector/',
  build: {
    outDir: 'dist'
  }
})