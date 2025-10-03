/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9f7',
          100: '#ccf3ee',
          200: '#99e7dd',
          300: '#66dbcc',
          400: '#33cfbb',
          500: '#00BBA7',
          600: '#009686',
          700: '#007064',
          800: '#004b43',
          900: '#002521',
          950: '#001311',
        },
        fairvia: {
          teal: '#00BBA7',
          'teal-light': 'rgba(0, 187, 167, 0.1)',
          'teal-border': 'rgba(0, 187, 167, 0.2)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        '3d': '0 10px 40px -10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        '3d-lg': '0 20px 60px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
      })
    },
  ],
};
