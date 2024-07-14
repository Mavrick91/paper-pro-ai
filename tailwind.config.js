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
            "linear-gradient(180deg, theme('colors.primary'), theme('colors.secondary'))",
        },
        '.text-gradient': {
          'line-height': 'normal !important',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-image':
            "linear-gradient(45deg, theme('colors.accent'), theme('colors.highlight'))",
        },
        '.feature-card': {
          background: 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border-radius': '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease',
        },
        '.feature-card:hover': {
          transform: 'translateY(-5px)',
          'box-shadow': '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
      });
    }),
  ],
};
