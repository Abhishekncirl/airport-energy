import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the custom domain www.airportenergy.ie via GitHub Pages, so
// `base` is '/'. (It was '/airport-energy/' when the site lived at
// abhishekncirl.github.io/airport-energy/.)
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: false,
  },
});
