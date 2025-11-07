/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {
      // Customize your theme here (colors, spacing, fonts, etc.)
      fontFamily: {
        baloo: ["var(--font-baloo2)"],
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
  ],
};
