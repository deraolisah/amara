/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      body: ['Montserrat', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        1: '#059669',
        2: '#10b981',
        // 50: '#eff6ff',
        // 100: '#dbeafe',
        // 200: '#bfdbfe',
        // 300: '#93c5fd',
        // 400: '#60a5fa',
        // 500: '#3b82f6',
        // 600: '#2563eb',
        // 700: '#1d4ed8',
        // 800: '#1e40af',
        // 900: '#1e3a8a',
      },
      secondary: {
        1: '#101010',
        2: '#999',
        // 50: '#f8fafc',
        // 100: '#f1f5f9',
        // 200: '#e2e8f0',
        // 300: '#cbd5e1',
        // 400: '#94a3b8',
        // 500: '#64748b',
        // 600: '#475569',
        // 700: '#334155',
        // 800: '#1e293b',
        // 900: '#0f172a',
      },
      tertiary: {
        1: '#FFF',
      },
    },
    extend: {},
  },
  plugins: [],
}

