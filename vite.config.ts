import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import http from 'http';
import https from 'https';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  // Determine the agent based on the protocol of the target URL
  const agent = env.VITE_API_BASE_URL.startsWith('https:') ?
                new https.Agent({ rejectUnauthorized: false }) :
                new http.Agent();

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/v1/g/': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          agent: agent,
        },
      },
    },
  };
});
