import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import unocss from 'unocss/vite'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [react(), unocss()],
})
