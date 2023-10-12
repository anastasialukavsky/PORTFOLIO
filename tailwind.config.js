/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: ['Cutive Mono', 'monospace'],
      logo: 'The Rivers Regular',
      dida: 'Dida',
    },
    extend: {
      screens: {
        xxs: '360px',
        xs: '375px',
        sm: '412px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '3440px',
        short: { raw: '(max-height: 768px) and (min-width: 1440px)' },
        xshort: { raw: '(max-height: 550px) and (min-width: 1020px)' },
      },
    },
  },
  plugins: [],
};
