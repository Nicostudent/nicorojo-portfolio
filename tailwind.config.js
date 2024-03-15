// tailwind.config.js

module.exports = {
  mode: 'jit', // Enable Just-In-Time mode for Tailwind CSS
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Specify the files where Tailwind should look for classes to remove unused styles
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}, // Extend the default Tailwind CSS theme here
  },
  variants: {
    extend: {}, // Extend or customize Tailwind CSS variants here
  },
  plugins: [], // Add any Tailwind CSS plugins here
};
