
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'fantasy': ['Cinzel Decorative', 'serif'],
        'mystical': ['Uncial Antiqua', 'serif'],
        'medieval': ['MedievalSharp', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Chumbi Valley inspired palette
        'forest': {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bbe5ca',
          300: '#8fd1a7',
          400: '#5cb67d',
          500: '#3a9b5c',
          600: '#2a7d47',
          700: '#21633a',
          800: '#1c4f2f',
          900: '#184127',
        },
        'mystical': {
          50: '#f4f3ff',
          100: '#ebe9fe',
          200: '#d9d6fe',
          300: '#bfb8fc',
          400: '#a091f8',
          500: '#8b6cf2',
          600: '#7c4ee8',
          700: '#6d3ed4',
          800: '#5b35b2',
          900: '#4c2f92',
        },
        'ember': {
          50: '#fef7ed',
          100: '#fdedd4',
          200: '#fad7a8',
          300: '#f6ba71',
          400: '#f19538',
          500: '#ed7916',
          600: '#de5f0c',
          700: '#b8470c',
          800: '#923a11',
          900: '#763111',
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        mysticalPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 108, 242, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 108, 242, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        gemGlow: {
          '0%, 100%': { 
            filter: 'brightness(1) drop-shadow(0 0 10px rgba(139, 108, 242, 0.5))',
          },
          '50%': { 
            filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(139, 108, 242, 0.8))',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        sparkle: 'sparkle 1.5s ease-in-out infinite',
        'mystical-pulse': 'mysticalPulse 3s ease-in-out infinite',
        'gem-glow': 'gemGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
