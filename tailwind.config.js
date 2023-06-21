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
        'primary': '#141414',
        'secondary': '#E5E5E5',
        'accent': '#B9090B',
        'midgray': '#6D6D6EB2'
      },

      boxShadow: {
        'accentshd': '2px 2px 23px -10px #B9090B ;'
      }
    }
  },
  plugins: [],
}
