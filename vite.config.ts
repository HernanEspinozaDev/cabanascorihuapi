import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://hernanespinozadev.github.io/cabanascorihuapi/", // Base configurada para GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
