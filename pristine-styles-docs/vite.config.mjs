import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repoRoot = resolve(process.cwd())
const docsSourceDir = resolve(repoRoot, 'docs-src')
const docsOutputDir = resolve(repoRoot, 'docs')

export default defineConfig({
  root: docsSourceDir,
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(docsSourceDir, 'src')
    }
  },
  server: {
    fs: {
      allow: [repoRoot]
    }
  },
  build: {
    outDir: docsOutputDir,
    emptyOutDir: true
  }
})