import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: "#faf0e6"
      },
      backgroundImage: {
        'hero-pattern': "url('/NattyFancyBackground.jpg')"
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        glow: 'glow 1.5s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
