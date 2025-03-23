import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#12A150',
        secondary: '#fff',
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          50: '#2359A9',
          70: '#29354F',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      boxShadow: {
        lg: '0 4px 6px rgba(0, 0, 0, 0.1)', // Тень при прокрутке
      },
      spacing: {
        'slide-spacing': '1rem',
        'slide-height': '19rem',
      },
      width: {
        'slide-size': '80%',
      },
      fontFamily: {
        sofia: ['"Sofia Sans Semi Condensed"', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Helvetica', 'sans-serif'],
        body: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
