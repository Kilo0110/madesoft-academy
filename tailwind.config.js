/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      'display-font': 'Poppins, system-ui, sans-serif',
    },
    extend: {
      colors: {
        'theme-icon-clr': '#9A9AB0',
        'theme-text-clr': '#11142D',
        'theme-fill-clr': '#041768',
        'theme-checkbox-clr': '#041459',
      },
    },
  },
  plugins: [],
};
