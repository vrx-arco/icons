import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [vue(), unocss()],
})
