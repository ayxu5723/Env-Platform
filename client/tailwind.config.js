/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tree-image': 'url("./assets/images/header_img1.jpg")',
        'ocean-trash-image': 'url("./assets/images/ocean-trash1.jpg")',
        'pollution-image': 'url("./assets/images/pollution.jpg")',
        'coral-death': 'url("./assets/images/coral_death.jpg")',
        'forest-fire': 'url("./assets/images/forest-fires1.jpg")',
        'gbr-image': 'url("./assets/images/gbr1.jpg")',
        'beach-cleanup1': 'url("./assets/images/BeachCleanUp1.jpg")',
        'beach-cleanup2': 'url("./assets/images/beach-cleanup2.jpg")'

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}
