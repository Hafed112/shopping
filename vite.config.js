import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false, // Enable or disable CSS modules
    sourceMap: true, // Enable source maps for CSS
    loaderOptions: {
      // Add any CSS loader options here
    },
  },
});
