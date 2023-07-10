/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#BBD700',
        brown: '#3D1A04',
      },
      keyframes: {
        scroll: {
          '0%': { left: 0 },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        'scroll-slow': 'scroll 20s linear infinite',
        'scroll-fast': 'scroll 10s linear infinite',
      },
      screens: {
        '2xl': '1560px',
      },
    },
  },
  plugins: [],
}
