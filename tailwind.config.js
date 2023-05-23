/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "border-bottom": "0 1px #eae8e4",
        "border-left": "-1px 0 #eae8e4",
        "border-secondary-button": "inset 0 0 0 1px #19110b",
        "border-secondary-button-hover": "inset 0 0 0 1px #eae8e4",
      },
    },
  },
  plugins: [],
};
