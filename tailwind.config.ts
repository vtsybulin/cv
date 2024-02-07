import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'vertical-grid': `
          linear-gradient(blue 0 0) calc(1*100%/6),
          linear-gradient(blue 0 0) calc(2*100%/6),
          linear-gradient(blue 0 0) calc(3*100%/6),
          linear-gradient(blue 0 0) calc(4*100%/6),
          linear-gradient(blue 0 0) calc(5*100%/6)`,
      },
      translate: {
        'spotlight-x': 'translateX(calc(var(--x) - var(--radius)))',
        'spotlight-y': 'translateY(calc(var(--y) - var(--radius)))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: false,
      themes: {
        light: {
          colors: {
            primary: '#6366f1',
            secondary: '#f472b6',
            foreground: '#3f3f46',
          },
        },
        dark: {
          colors: {
            primary: '#6366f1',
            secondary: '#f472b6',
            background: '#09090b',
            foreground: '#a1a1aa',
            content1: {
              DEFAULT: '#18181b',
            },
          },
        },
      },
    }),
  ],
};
export default config;
