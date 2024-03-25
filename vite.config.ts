import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/v1/g/': {
          target: 'https://chaemini-backend.vercel.app',
          changeOrigin: true,
          // Add any other proxy options here if needed
        },
      },
    },
  };
});
