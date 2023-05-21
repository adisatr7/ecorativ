/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9539FE",
        secondary: "#407BFF",
        brown: "#FD8D74",
      },

      fontSize: {
        heading: "24px",
        subheading: "18px",
        body: "16px",
        caption: "14px"
      },

      fontFamily: {
        heading: "Poppins",
        subheading: "Poppins",
        body: "Open Sans",
        caption: "Open Sans"
      }      
    },
  },
  plugins: [],
}

