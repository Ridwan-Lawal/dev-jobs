/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      colors: {
        violet: "#5964e0",
        " violet-light": "#939bf4",
        "violet-ultralight": "#eeeffc",
        " btn-secondary": "#c5c9f4",
        "text-heading": "#19202d",
        " background-page-elements": "#fff",
        "background-body": "#f4f6f8",
        "grey-light": "#9eadc2",
        "grey-medium": "#6e8098",
        "grey-dark": " #696e76",
        "grey-ultradark": "#303642",
        "checkbox-fill": "#e7e8e9",
      },
      backgroundImage: {
        "header-pattern-mobile":
          "url('/src/assets/mobile/bg-pattern-header.svg')",
        "header-pattern-tablet":
          "url('/src/assets/tablet/bg-pattern-header.svg')",
        "header-pattern-desktop":
          "url('/src/assets/desktop/bg-pattern-header.svg')",
      },

      screens: {
        tablet: "680px",
        md: "850px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
