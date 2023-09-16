/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEC00F",
        backdrop: "#831779",
        lighest: {
          gray: "#C0C0C0",
        },
      },
    },
  },
  plugins: [],
};
