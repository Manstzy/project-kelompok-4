/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      miniPhone: '300px',
      phone: '390px',

      miniMedium: '440px',
      medium: '514px',

      miniLarge: '640px',
      // => @media (min-width: 640px) { ... }
      large: '842px',

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'grey-thin': '#666666D9',
      },
      backgroundImage: {
        'banner1': "url('https://sarungindonesia.co.id/wp-content/uploads/2020/06/BACK1.jpg')",
        'banner2': "url('https://sarungindonesia.co.id/wp-content/uploads/2020/06/ATLAS-05-SUPERCAR-1301x800.jpg')"
      }
    },
    // plugins: [],
  },
};
