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
        'accent': '#960000',
        'accent-light': '#B9090B',
        'nero': '#1D1D1D',
        'zambezi': '#5B5B5B',
        'overlay': 'rgba(0, 0, 0, 0.6)'

      },
      boxShadow: {
        'accentshd': '2px 2px 23px -10px #960000 ;'
      },
      fontSize: {
        'xxs': '11px', // span
        'xs': '13px',  // p
        'sm': '14px',  // h6
        'md': '16px',  // h5
        'lg': '18px',  // h4
        'xl': '26px',  // h3
        '2xl': '42px', // h2
        '3xl': '56px', // h1
      }
    }
  },
  plugins: [],
}