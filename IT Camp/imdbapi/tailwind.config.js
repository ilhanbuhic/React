/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        ilhanLight: {
          primary: '#1c4f82',
          secondary: '#7d919b',
          accent: '#eb6b47',
          neutral: '#23282f',
          'base-100': '#212121',
          info: '#0092d6',
          success: '#6cb288',
          warning: '#daad58',
          error: '#ab3d30',
        },
        ilhanDark: {
          primary: '#48ce7d',
          secondary: '#3c0672',
          accent: '#331df7',
          neutral: '#3905e3',
          'base-100': '#333848',
          info: '#7f98f0',
          success: '#30c09e',
          warning: '#c49d12',
          error: '#ee2f69',
        },
      },
    ],
  },
}