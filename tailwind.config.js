module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '400': '400px',
      '160': '160px'
     }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
