/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
 
  theme: {
    extend: {
      colors: {
        "primary-light": "#EEEEEE",
        "secondary-light": "#e6f1ff",
        "ternary-light": "#ccd6f6",

        "primary-dark": "#0a192f",
        "secondary-dark": "#112240",
        "ternary-dark": "#233554",

        "primary-green": "#64ffda",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: ["@tailwindcss/forms"],
};
