/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      "80%": "80%",
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-amis-pro)"],
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "base-yellow": "#FAE600",
      "base-black": "#141414",
      white: "#FFFFFF",
      "secondary-dark-gray": "#373232",
      "light-gray": "#636363",
      "dark-blue": "#022D51",
      gray: "#8F8F8F",
      "success-color": "#229718",
    },
  },
};
