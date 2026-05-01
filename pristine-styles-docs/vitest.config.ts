import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'docs-src', 'src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['docs-src/src/**/*.{test,spec}.{js,ts}']
  }
})
