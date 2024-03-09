/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        denim: "#022959",
        "sky-blue": "#BEE2FD",
        grey: "#9699AA",
        "very-light-grey": "#F8F9FF",
        "border-grey": "#D6D9E6",
        purple: "#483EFF",
      },
    },
  },
  plugins: [],
};
