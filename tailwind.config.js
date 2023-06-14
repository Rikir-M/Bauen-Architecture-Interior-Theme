/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px'
        }
      },
      colors: {
        primary: '#272727',
        secondary: '#b19777',
        boxColor: '#323232',
        textColor: '#999999'
      },
      fontFamily: {
        'Didact': 'Didact Gothic',
        'Oswald' : 'Oswald'
      }
    },
  },
  plugins: [],
}

