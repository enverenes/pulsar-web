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
        primaryText: '#ffffff',
        secondaryText: '#000000',
        footerText: '#a1a1a1',
        button: '#FFD369',
        buttonHover: '#FFD700',
      },
    },
  },
  plugins: [],
};
