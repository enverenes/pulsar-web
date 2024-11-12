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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBg: '#1a202c',        // Equivalent to bg-gray-900
        secondaryBg: '#2d3748',      // Equivalent to bg-gray-800
        cardBg: '#4a5568',           // Equivalent to bg-gray-700
        primaryText: '#f7fafc',      // Equivalent to text-gray-100
        secondaryText: '#a0aec0',    // Equivalent to text-gray-400
        accent: '#667eea',           // Equivalent to indigo-600
        accentHover: '#5a67d8',      // Equivalent to indigo-700
        footerText: '#718096',       // Equivalent to text-gray-500
      },
    },
  },
  plugins: [],
};
