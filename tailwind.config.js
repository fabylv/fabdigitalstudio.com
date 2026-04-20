export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#102146',
          100: '#17315f',
          500: '#2f6fe4',
          600: '#3b8cff',
          700: '#44e0d6',
        },
        accent: {
          400: '#ff9a2e',
          500: '#ff6f3a',
        },
        ink: {
          950: '#f5f7fa',
          900: '#e9f0fb',
          800: '#d5e1f7',
          700: '#a7badc',
          600: '#7f96bb',
        },
        line: '#22345d',
        surface: '#101b36',
        'surface-soft': '#0b1328',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
