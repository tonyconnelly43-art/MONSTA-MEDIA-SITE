import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D62828',
          'red-dark': '#A11E1E',
          navy: '#0A1930',
          'navy-light': '#132A4E',
          cream: '#FFF7EC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        chunky: '1.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
