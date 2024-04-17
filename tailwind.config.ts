import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      desktop: '769px',
      tablet: '521px',
    },
    colors: {
      mono_50: '#F7F8FA',
      mono_100: '#EAEBED',
      mono_200: '#CACDD2',
      mono_300: '#91A3AE',
      mono_400: '#9FA4A8',
      mono_500: '#73787E',
      mono_600: '#474C52',
      mono_700: '#3E4348',
      mono_800: '#27282C',
      mono_900: '#1C1D1F',
      mono_black: '#000000',
    },

    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
      },
    },
  },
  plugins: [],
};

export default config;
