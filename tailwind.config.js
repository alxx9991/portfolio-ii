/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      general: ["GeneralSans", "serif"],
    },
    fontSize: {
      h1: ["min(14vw, 7.594rem)", { lineHeight: "110%", fontWeight: 600 }],
      h2: ["5.063rem", { lineHeight: "110%", fontWeight: 600 }],
      h3: ["3.375rem", { lineHeight: "110%", fontWeight: 500 }],
      subtitle: ["2.25rem", { lineHeight: "110%", fontWeight: 600 }],
      b1: ["1.5rem", { lineHeight: "150%" }],
      b2: ["1.125rem", { lineHeight: "150%" }],
      caption: [
        "min(2vw, 1.125rem)",
        {
          lineHeight: "110%",
          fontWeight: 500,
          letterSpacing: "min(0.35vw, 0.25rem)",
        },
      ],
      "caption-small": [
        "min(3vw, 1rem)",
        {
          lineHeight: "110%",
          fontWeight: 500,
          letterSpacing: "min(0.35vw, 0.15rem)",
        },
      ],
      btn: ["1.25rem", { lineHeight: "110%", fontWeight: 500 }],
    },
    colors: {
      primary40: "#1F254C",
      highlight1: "#A65BFF",
      highlight2: "#817CFF",
      bg: "#09101A",
      grey: "#cecece",
      white: "#fcfcfc",
    },
    extend: {
      screens: {
        md: "640px",
        lg: "960px",
      },
      gridTemplateColumns: {
        sm: "2rem repeat(4, 1fr) 2rem",
        md: "3rem repeat(8, 1fr) 3rem",
        xl: "10% repeat(12,1fr) 10%",
        "2xl": "15% repeat(12,1fr) 15%",
      },
      gridTemplateRows: {
        "max-content": "max-content",
      },
      gridColumn: {
        sm: "1 / span 6",
        md: "1 / span 10",
        xl: "1 / span 14",
      },
    },
  },
  plugins: [],
};
