/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lilita-one': ['"Lilita One"', 'system-ui'],
        'fredoka-regular': ['"Fredoka"', 'sans-serif'],
        'nunito-regular': ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
