/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a4d68',
        secondary: '#088395',
        accent: '#05BFDB',
        highlight: '#00FFCA',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.debug': {
          border: '1px solid red',
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.bg-gradient': {
          'background-image':
            "linear-gradient(135deg, theme('colors.primary'), theme('colors.secondary'))",
        },
        '.text-gradient': {
          'line-height': 'normal !important',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-image':
            "linear-gradient(45deg, theme('colors.accent'), theme('colors.highlight'))",
        },
      });
    }),
  ],
};
