/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: { primary: "#0c6c8e", secundary: "#29bbef", bgl: "#ffff", gris: "#ecf0f1" }
    },
  },
  plugins: [],
}
