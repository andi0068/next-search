/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'hsl(211, 100%, 42%)',
        separator: 'hsla(240, 6%, 25%, .1)',
        foreground: {
          DEFAULT: 'hsl(0, 0%, 0%)',
          secondary: 'hsla(240, 6%, 25%)',
          tertiary: 'hsla(240, 6%, 25%, .75)',
        },
        background: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          secondary: 'hsl(240, 6%, 97%)',
          tertiary: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
};
