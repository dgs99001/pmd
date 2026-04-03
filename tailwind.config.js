/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '45%': { transform: 'translateX(-100%)' },
          '45.1%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 60s steps(1, end) infinite',
      },
    },
  },
  plugins: [],
};
