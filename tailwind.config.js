/** @type {import('tailwindcss').Config} */
export default {
  content: [ 'node_modules/flowbite-react/**/*.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}

