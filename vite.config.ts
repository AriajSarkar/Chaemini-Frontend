import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import http from "https";
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/v1/g/': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          agent: new http.Agent()
        },
      },
    },
  };
});
