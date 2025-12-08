/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#06b6d4",
          dark: "#0ea5b7",
        },
        accent: "#3b82f6",
      },
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui"],
        signature: ["Great Vibes"],
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
