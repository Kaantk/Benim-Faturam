/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEC00F",
        backdrop: "#831779",
        lighest: {
          gray: "#E2E2E2",
        },
        dark: {
          gray: "#8A8A8A",
        },
      },
    },
  },
  plugins: [],
};
