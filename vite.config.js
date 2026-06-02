import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repo path on GitHub Pages: https://<user>.github.io/airport-energy/
// `base` only kicks in for production builds; `npm run dev` stays at "/".
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/airport-energy/' : '/',
  server: {
    port: 5173,
    open: false,
  },
}));
