/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand palette: black base, pine surfaces, gold accent.
      // Gold clears AA as text on both the black background (10:1) and the
      // pine cards (5.3:1), so the accent needs no separate readable tint.
      colors: {
        // Page background
        primary: {
          DEFAULT: "#000000",
          light: "#0B0F0D",
          dark: "#000000",
        },
        // Pine — navbar, cards, elevated surfaces
        secondary: {
          DEFAULT: "#1B4332",
          light: "#336B54", // borders
          dark: "#0E241B", // scrims / hover overlays
        },
        // Gold
        accent: {
          DEFAULT: "#D4AF37",
          light: "#E4C766",
          dark: "#A8871F",
        },
        // Text scale
        content: {
          DEFAULT: "#E5E2D9",
          muted: "#D5D1C6",
          subtle: "#B0ACA1", // must stay readable on pine cards, not just on black
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        mini: "0.425rem", // 10px
        tiny: "0.525rem", // 10px
        xxss: "0.625rem", // 10px
        xxs: "0.75rem", // 12px
      },
      keyframes: {
        // Marching ants: travels the dashes around the pill's perimeter.
        march: {
          to: { "stroke-dashoffset": "-110" },
        },
        // Slow, low-amplitude breathing so the outline reads as "live" without
        // drawing attention away from the selected tab.
        dimPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        // --marquee-shift must equal exactly one copy's share of the strip
        // (100% / number of copies) or the loop visibly jumps.
        marqueeLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(var(--marquee-shift, -33.3333%))" },
        },
        marqueeRight: {
          from: { transform: "translateX(var(--marquee-shift, -33.3333%))" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        march: "march 8s linear infinite",
        "dim-pulse": "dimPulse 3s ease-in-out infinite",
        // Duration is set per row via an inline style.
        "marquee-left": "marqueeLeft 50s linear infinite",
        "marquee-right": "marqueeRight 50s linear infinite",
      },
      boxShadow: {
        // Soft gold halo — deliberately dim, no hard bright core.
        neon: "0 0 14px -3px rgba(212, 175, 55, 0.40), 0 0 5px -2px rgba(212, 175, 55, 0.30)",
      },
    },
    screens: {
      xs: "350px",
      sm: "520px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
