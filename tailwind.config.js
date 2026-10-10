/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: '#ffffff', // Clean white background
          950: '#f8fafc', // Ultra-premium light slate-50 background
        },
        primary: {
          500: '#3B82F6', // Electric Shopify Cobalt Blue
          600: '#2563EB',
        },
        secondary: {
          500: '#F59E0B', // Amazon Marketplace Amber Gold
          600: '#D97706',
        },
        accent: {
          500: '#10B981', // Hyper Emerald Green (Sales Conversion Actions)
          600: '#059669',
        },
        steel: {
          800: '#1E293B', // Muted steel grid lines
          900: '#0F172A',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'glass-glow': '0 0 25px -5px rgba(59, 130, 246, 0.12)',
        'accent-glow': '0 0 25px -5px rgba(16, 185, 129, 0.2)',
        'gold-glow': '0 0 25px -5px rgba(245, 158, 11, 0.15)',
      },

      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
    },
  },
  plugins: [],
}
