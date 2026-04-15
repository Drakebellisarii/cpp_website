module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#1A4FD6',
          navy:   '#0A1628',
          gold:   '#C9A84C',
          cream:  '#F8F7F5',
          muted:  '#8392A5',
          border: '#E2E6ED',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}