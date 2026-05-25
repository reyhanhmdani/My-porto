/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        obsidian: '#030712',
        darkgray: '#0B0F19',
        laravel: {
          primary: '#FF2D20',
          glow: 'rgba(255, 45, 32, 0.25)',
          bg: '#180B0B'
        },
        golang: {
          primary: '#00ADD8',
          glow: 'rgba(0, 173, 216, 0.25)',
          bg: '#05141D'
        },
        javascript: {
          primary: '#F7DF1E',
          glow: 'rgba(247, 223, 30, 0.25)',
          bg: '#141405'
        }
      }
    },
  },
  plugins: [],
}
