/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Set Montserrat as the default sans font
      },
      colors: {
        background: "#ffffff",       // Pure white background
        foreground: "#000000",       // Pure black foreground
        primaryBg: '#000000',        // Very dark gray background
        secondaryBg: "#ffffff",      // Dark gray background for secondary elements
        cardBg: '#4d4d4d',           // Medium gray for card backgrounds
        primaryText: '#ffffff',      // Light gray for primary text
        secondaryText: '#000000',    // Medium-light gray for secondary text
        accent: '#7d7d7d',           // Medium gray accent color
        accentHover: '#5c5c5c',      // Slightly darker gray for hover state
        footerText: '#a1a1a1',       // Medium-light gray for footer text
      },
    },
  },
  plugins: [],
};
