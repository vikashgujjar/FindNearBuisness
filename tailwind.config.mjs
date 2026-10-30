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
        // City Pulse palette (derived from the Future Touch logo)
        night: {
          950: "#070920",
          900: "#0D1033",
          800: "#161B4A",
          700: "#222966",
          600: "#323B85",
        },
        brand: {
          50: "#F2EFFF",
          100: "#E4DDFF",
          200: "#C9BBFF",
          400: "#8D73FF",
          500: "#6D4AFF",
          600: "#5A35F0",
          700: "#4A27CC",
        },
        magenta: {
          400: "#FF5CC0",
          500: "#F03DA8",
          600: "#D02A8E",
        },
        cyan: {
          300: "#7CF0FA",
          400: "#2EE6F5",
          500: "#12C8D8",
        },
        pin: {
          400: "#FFC24B",
          500: "#FFB020",
        },
        mist: "#F4F5FB",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(109,74,255,.15), 0 20px 50px -12px rgba(109,74,255,.45)",
        "glow-magenta": "0 20px 50px -12px rgba(240,61,168,.5)",
        card: "0 1px 2px rgba(13,16,51,.04), 0 12px 32px -12px rgba(13,16,51,.18)",
        "card-hover": "0 2px 4px rgba(13,16,51,.06), 0 28px 60px -16px rgba(13,16,51,.30)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #6D4AFF 0%, #F03DA8 100%)",
        "cool-gradient": "linear-gradient(120deg, #2EE6F5 0%, #6D4AFF 100%)",
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
