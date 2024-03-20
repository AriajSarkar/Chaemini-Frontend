import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
    // Add any other Vite configuration options here if needed
    // server: {
    //   proxy: {
    //     '/api/v1/g/': {
    //       target: process.env.PROXY_URL || undefined,
    //       changeOrigin: true,
    //       // Add any other proxy options here if needed
    //     },
    //   },
    // },
  };
});
