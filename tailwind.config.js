/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#141416',
        'secondary': '#E5E5E5',
        'accent': '#FEC603',
        'nero': '#1D1D1D',
        'zambezi': '#5B5B5B',

      },
      boxShadow: {
        'accentshd': '2px 2px 23px -10px #FEC603 ;'
      },
      fontSize: {
        'xs': '13px',
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '26px',
        '2xl': '42px',
        '3xl': '56px',
      }
    }
  },
  plugins: [],
}
