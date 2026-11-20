/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Findbee palette (blue brand, golden accent)
        night: {
          950: "#060F33",
          900: "#0B1C54",
          800: "#12286E",
          700: "#1B3A8F",
          600: "#2347B0",
        },
        brand: {
          50: "#EAF5FF",
          100: "#D3EAFF",
          200: "#A9D8FF",
          300: "#7CC4FF",
          400: "#4FB0FB",
          500: "#0A8EF8",
          600: "#0A72DE",
          700: "#0A5FC0",
        },
        // "magenta" and "pin" are the golden accent in the Findbee theme
        magenta: {
          400: "#FFC81E",
          500: "#F8A808",
          600: "#D98E00",
        },
        cyan: {
          300: "#8AE6FF",
          400: "#16CCF8",
          500: "#08A8E0",
        },
        pin: {
          400: "#FFC81E",
          500: "#F8A808",
        },
        mist: "#F3F8FE",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(10,142,248,.15), 0 20px 50px -12px rgba(10,142,248,.45)",
        "glow-magenta": "0 20px 50px -12px rgba(248,168,8,.5)",
        card: "0 1px 2px rgba(11,28,84,.04), 0 12px 32px -12px rgba(11,28,84,.18)",
        "card-hover": "0 2px 4px rgba(11,28,84,.06), 0 28px 60px -16px rgba(11,28,84,.30)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #0A72DE 0%, #0AA0F5 100%)",
        "cool-gradient": "linear-gradient(120deg, #16CCF8 0%, #0A8EF8 100%)",
      },
      keyframes: {
        "ping-slow": {
          "0%": { transform: "scale(.6)", opacity: ".7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "dash-move": {
          to: { strokeDashoffset: "-40" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "ping-slow": "ping-slow 3s cubic-bezier(0,0,.2,1) infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "dash-move": "dash-move 1.6s linear infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
