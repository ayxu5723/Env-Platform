/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tree-image': 'url("./assets/images/header_img1.jpg")'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}
