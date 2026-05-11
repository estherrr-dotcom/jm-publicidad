/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg':   '#11140f',
        'secondary-bg': '#1a1c17',
        'footer-bg':    '#0c0a09',
        'card-bg':      '#1e211b',
        'heading':      '#e2e3da',
        'accent':       '#bdcbaf',
        'body-text':    '#c5c8bd',
        'muted':        '#78716c',
        'mint':         '#a7f3d0',
        'btn-text':     '#283420',
        'nav-border':   '#454840',
        'divider':      '#292524',
        'nav-inactive': '#a8a29e',
        'logo-white':   '#e7e5e4',
      },
      fontFamily: {
        space:   ['"Space Grotesk"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
