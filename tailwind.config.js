/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial light-mode palette (design-v2)
        background: '#FAFAF5', // Alabaster / oat paper
        surface: '#F0EFE9',    // Stone surface
        line: '#E5E4DE',       // Hairline dividers
        text: '#2A2825',       // Deep espresso (primary)
        muted: '#73706B',      // Warm slate (secondary)
        accent: '#5B4278',     // Muted royal plum
        // Legacy dark tokens kept so any stray class still resolves
        primary: '#0A0A14',
        recessed: '#4C2D91',
        dark: '#18181B',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        drama: ['"Newsreader"', 'serif'],
        serif: ['"Newsreader"', 'serif'],
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
