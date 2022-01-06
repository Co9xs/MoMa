module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          100: '#FFF',
          200: '#F2F3F5',
        },
        gray: {
          100: '#D9DCE3',
          200: '#BCC3CD',
          300: '9099A8',
          400: '#676F82',
        },
        black: {
          100: '#3D4753',
          200: '#1C2330',
        },
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      inner: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  },
  plugins: [],
};
