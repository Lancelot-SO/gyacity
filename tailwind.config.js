/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0a0908',
        bg2:     '#141210',
        bg3:     '#1a1714',
        card:    '#131110',
        cream:   '#f4dcc0',
        cream2:  '#e8c9a0',
        coral:   '#d97757',
        oxblood: '#7a2418',
        brass:   '#a8864a',
        blue:    '#2e4a5e',
      },
      fontFamily: {
        sans: ['"Geist"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
