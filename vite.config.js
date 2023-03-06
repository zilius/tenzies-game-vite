import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      userPolling: true,
    },
    host: true, // for the DOcker Container port mapping
    strictPort: true,
    port: 8088,
  }
})
