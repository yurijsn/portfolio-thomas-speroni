import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-thomas-speroni/',
  build: {
    // Otimizações de build
    cssMinify: true,
    rollupOptions: {
      output: {
        // Chunk por vendor para cache otimizado
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
