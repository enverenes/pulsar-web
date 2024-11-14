/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yourFont: ['Bricolage_Grotesque', 'sans-serif'],
      },
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        primaryBg: '#000000',
        secondaryBg: "#ffffff",
        cardBg: '#4d4d4d',
        primaryText: '#ffffff',
        secondaryText: '#000000',
        accent: '#7d7d7d',
        accentHover: '#5c5c5c',
        footerText: '#a1a1a1',
      },
    },
  },
  plugins: [],
};
