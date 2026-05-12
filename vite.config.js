import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: [
      'sb-3n95aafd70hb.vercel.run',
      'localhost',
      '127.0.0.1'
    ]
  }
})
