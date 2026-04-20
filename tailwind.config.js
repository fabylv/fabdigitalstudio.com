export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        ink: {
          950: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        line: '#e2e8f0',
        surface: '#ffffff',
        'surface-soft': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
