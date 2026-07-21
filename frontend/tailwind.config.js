/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B5FE3',
          light: '#5D7CF0',
          dark: '#2A45B8',
        },
        secondary: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
          dark: '#0F9488',
        },
        dark: {
          DEFAULT: '#0B1120',
          card: '#111A2E',
          border: '#1E293B',
        },
        accent: '#F5A623',
        surface: '#F7F8FB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Sora"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(59, 95, 227, 0.45)',
        'glow-teal': '0 0 40px -8px rgba(20, 184, 166, 0.4)',
        card: '0 4px 24px -4px rgba(11, 17, 32, 0.08)',
        'card-hover': '0 20px 48px -12px rgba(11, 17, 32, 0.18)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        blob: 'blob 9s infinite ease-in-out',
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        'gradient-x': 'gradient-x 6s ease infinite',
        shimmer: 'shimmer 2.5s infinite linear',
        float: 'float 4s ease-in-out infinite',
      },
      backgroundSize: {
        '300%': '300% 300%',
        'grid-cell': '40px 40px',
      },
      animationDelay: {
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const delays = theme('animationDelay');
      const utilities = Object.entries(delays).map(([key, value]) => ({
        [`.${e(`animation-delay-${key}`)}`]: { animationDelay: value },
      }));
      addUtilities(utilities);
    },
  ],
}