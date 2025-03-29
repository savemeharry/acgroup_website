/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // blue - technology and reliability
          light: '#004d99',
          dark: '#002244',
        },
        accent: {
          DEFAULT: '#FF6600', // orange - for buttons and CTA elements
          light: '#ff8533',
          dark: '#cc5200',
        },
        background: {
          DEFAULT: '#eef2f7', // более заметный светло-голубой фон
          card: '#ffffff',    // белый для карточек
          dark: '#dce4f0',    // более темный фон для секций
        },
        text: {
          DEFAULT: '#2c3345', // темнее для основного текста
          light: '#485269',   // для второстепенного текста
          muted: '#6e7a94',   // приглушенный текст
        },
        border: '#c9d6e8',    // более заметный цвет границ
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 51, 102, 0.07)',
        'medium': '0 4px 16px rgba(0, 51, 102, 0.12)',
        'card': '0 4px 12px rgba(0, 51, 102, 0.08)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(to bottom, #f7f9fc, #eef2f7)',
        'gradient-card': 'linear-gradient(to bottom, #ffffff, #f7faff)',
      },
    },
  },
  plugins: [],
} 