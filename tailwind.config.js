const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme:{
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      green: colors.green
    },
    fontFamily:{
      'sans':['Inter', 'sans-serif'],
    }
  }
};
