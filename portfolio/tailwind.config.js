/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        ink: "#0B1F3A",
        "ink-soft": "#1C3355",
        amber: "#B9812F",
        "amber-soft": "#E4C892",
        line: "#D9D2C1",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        dossier: "920px",
      },
    },
  },
  plugins: [],
};
