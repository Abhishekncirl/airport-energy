import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site is served from a custom apex/root URL (www.airportenergy.ie) via
// GitHub Pages, so `base` is just '/'. (Previously '/airport-energy/' when
// the site lived at abhishekncirl.github.io/airport-energy/.)
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: false,
  },
});
