/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1000': '1000px',
      },
      backgroundSize: {
        'fillimg': '100% 100%',
      },
    },
    plugins: [],
  }
}
