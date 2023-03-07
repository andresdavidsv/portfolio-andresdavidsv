/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayColor: '#333333',
        yellowColor: '#F7AB0A',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
