import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// Get the proxy URL from the environment variables
const proxyUrl: string | undefined = process.env.PROXY_URL

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/g/': {
        target: proxyUrl || undefined, // Use undefined if proxyUrl is undefined
        changeOrigin: true,
        // Add any other proxy options here if needed
      }
    }
  }
})
