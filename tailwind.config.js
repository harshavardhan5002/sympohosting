/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'serif'],
      },
      colors: {
        'dark-green': {
          50: '#f0f9f4',
          100: '#d1e7dd',
          200: '#b0d5c4',
          300: '#8ac0a8',
          400: '#63a68b',
          500: '#3d8d6e',
          600: '#2b7858',
          700: '#1e6144',
          800: '#144a34',
          900: '#0c3325',
        },
        'golden': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#fcd34d',
          500: '#fbbf24',
          600: '#f59e0b',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        },
        'black': '#000000',
        'white': '#FFFFFF',
        'primary': { // Primary color is now golden
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#fcd34d',
          500: '#fbbf24',
          600: '#f59e0b',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        },
      },
      backgroundColor: {
        'dark': '#000000',
      },
      textColor: {
        'light': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
