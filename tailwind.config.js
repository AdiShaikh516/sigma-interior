/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary canvas - pure white for gallery aesthetic
        canvas: {
          DEFAULT: '#ffffff',
        },
        // Secondary section canvas - soft alabaster cream
        alabaster: {
          DEFAULT: '#fcfaf7',
          warm: '#f9f6f0',
        },
        // Architectural charcoal for body copy - never pure black
        charcoal: {
          DEFAULT: '#191919',
          muted: '#2a2a2a',
          light: '#3a3a3a',
        },
        // Muted satin gold for headings and accents
        gold: {
          DEFAULT: '#baa170',
          light: '#c9ad8a',
          dark: '#9f8452',
        },
        // Neutral stone tones for secondary text
        stone: {
          DEFAULT: '#6b6b6b',
          light: '#8a8a8a',
          muted: '#a0a0a0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.2em',
        wide: '0.1em',
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [],
};
