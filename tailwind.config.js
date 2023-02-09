/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#43C6AC",
        yellow: "#191654",
      },
      backgroundImage: {
        subs: "url(./assets/subscribe.jpg)",
      },
    },
  },
  plugins: [],
};
