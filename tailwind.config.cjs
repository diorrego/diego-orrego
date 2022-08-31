const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        context: '#09090D',
        input: '#0E0E0F',
        surface: '#1C1C1E',
        'container-800': '#141517',
        'container-600': '#2C2C2E',
        'container-400': '#3A3A3C',
        'container-200': '#48484A',
        'container-100': '#8E8E93',
        'primary-200': '#7764D8',
        'primary-400': '#544699',
        'primary-600': '#312959',
        'secondary-50': '#FEEFE7',
        'secondary-100': '#F2A057',
        'secondary-200': '#D98F4E',
        'green-post': '#3AA38D',
        'blue-post': '#1FAFBF',
        'lilac-post': '#BF9BBD',
        'red-post': '#F29191',
        'yellow-post': '#BFBF73',
        'red-dull-post': '#AA8088',
        'green-dull-post': '#7E9A83',
        'lilac-dull-post': '#9C8197',
        'yellow-dull-post': '#ABA789',
        'blue-dull-post': '#86A0A8',
        'red-top': '#A83843',
        'yellow-top': '#F5D36B',
        'green-top': '#7AA45C',
        'red-danger': '#FF453A',
        'yellow-warning': '#FFD60A',
        'green-success': '#30D158',
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fill, minmax(250px,1fr))',
      },
    },
    fontFamily: {
      sans: ['"Baloo Thambi 2"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
