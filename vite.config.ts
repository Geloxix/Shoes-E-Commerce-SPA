import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2222,
    proxy: {
      "/api" : {
        target: "http://localhost:1111",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      "/cartApi": {
        target: "http://localhost:1234",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cartApi/, ''),
      }
    },
  }
})
