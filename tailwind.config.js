/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        miniPhone: '300px',
        phone: '410px',
        medium: '520px',
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
        large: '850px',

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        'grey-thin': '#666666D9',
      },
    },
  },
  plugins: [],
};
