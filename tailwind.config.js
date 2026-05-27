/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand surfaces - charcoal pulled from the Airport Energy logo background.
        brand: {
          50:  '#f4f5f6',
          100: '#e6e8ea',
          200: '#c9cdd1',
          300: '#a4abb1',
          400: '#777f86',
          500: '#525a61',
          600: '#3d4348',
          700: '#2f3439',
          800: '#23272b',
          900: '#1a1d20',
          950: '#0f1113',
        },
        // Accent green pulled from the "airport" wordmark.
        accent: {
          DEFAULT: '#1aa64a',
          50:  '#ebfaf0',
          100: '#cef3da',
          200: '#a0e6b8',
          300: '#65d28b',
          400: '#34bb66',
          500: '#1aa64a',
          600: '#10843a',
          700: '#0d6830',
          800: '#0b5128',
          900: '#08361b',
        },
        fuel: {
          green: '#1aa64a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        // Dark charcoal hero with subtle green glow - matches the brand mark.
        'hero-gradient':
          'radial-gradient(1200px 600px at 10% 0%, rgba(26,166,74,0.22), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(180deg, #0f1113 0%, #1a1d20 60%, #23272b 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.9s ease-out both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
