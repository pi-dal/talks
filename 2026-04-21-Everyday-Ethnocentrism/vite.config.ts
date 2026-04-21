import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.SLIDEV_BASE || '/2026-04-21-Everyday-Ethnocentrism/',
  build: {
    outDir: 'dist'
  }
})