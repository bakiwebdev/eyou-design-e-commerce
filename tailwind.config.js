/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBB03B',
        lightPrimary: '#FFF3DF',
        secondary: '#FF0000',
        gray: '#CECECE',
        grayText: '#808080',
        lightGray: '#F6F6F6',
        fb: '#3B5998',
        google: '#DB4437',
      },
    },
  },
  plugins: [],
}
