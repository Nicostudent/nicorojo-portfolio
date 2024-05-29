// tailwind.config.js

module.exports = {
  mode: 'jit', // Enable Just-In-Time mode for Tailwind CSS
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Specify the files where Tailwind should look for classes to remove unused styles
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        landing: ['Zen Antique Soft']
      }
    }, 
    backgroundImage: {
      'jigsaw-pattern': "url('/src/assets/jigsaw.png')",      
      'hexagon_big': "url('/src/assets/hexagon_big.png'), url('/src/assets/hexagon_big.png')",
    },
    backgroundPosition: {
      'top-left-bottom-right': 'top left, bottom right',
    },
    backgroundSize: {
      '10%': '10%',
      '20%': '20%, 20%',
      '40%': '40%',
    },   
    backgroundRepeat: {
      'no-repeat': 'no-repeat, no-repeat',
    },
  },
  variants: {
    extend: {}, // Extend or customize Tailwind CSS variants here
  },
  plugins: [], // Add any Tailwind CSS plugins here
};
