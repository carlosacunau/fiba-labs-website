/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A14', // Deep Void
        primary: '#0A0A14', // Deep Void
        accent: '#8B5CF6', // Electric Violet
        recessed: '#4C2D91', // Deep Indigo
        ghost: '#F0EFF4', // Ghost (from preset D, used as needed)
        dark: '#18181B', // Graphite
        text: '#E8E4F0', // Lavender White
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        drama: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
    },
  },
  plugins: [],
}
