/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1B18',
        basalt: '#262420',
        basaltHigh: '#302D27',
        line: 'rgba(232,228,218,0.10)',
        laton: '#A97A3C',
        latonSoft: '#C79A5C',
        cobre: '#4E6359',
        hueso: '#E8E4DA',
        piedra: '#938C7E',
        mariscos: '#9C5232',
        cerveza: '#86662E',
        tradicional: '#5C6440',
        dulces: '#644B52',
      },
      fontFamily: {
        sans: ['Karla', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Big Shoulders Display"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
