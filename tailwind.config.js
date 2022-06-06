module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
    },
    extend: {
      animation: {
        "fadeOut": "fadeOut 5s ease-in-out infinite",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.primary"), color: theme("colors.white") },
          "50%": { backgroundColor: theme("colors.transparent"), color: theme("colors.secondary") },
          "100%": { backgroundColor: theme("colors.primary"), color: theme("colors.white") },
        },
      }),
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#737961",
          secondary: "#5c7f52",
          accent: "#5c7f52",
          neutral: "#5c7f52",
          "base-100": "#ffffff",
        },
      },
      "",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}