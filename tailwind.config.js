/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }},
  },
  plugins: [],
}
