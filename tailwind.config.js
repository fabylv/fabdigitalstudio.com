export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        ink: {
          950: '#0f172a',
          900: '#172554',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        line: '#dbe3f0',
        surface: '#ffffff',
        'surface-soft': '#f4f7fb',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
