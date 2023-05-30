/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
    require("tailgrids/plugin")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d1d5db",
          "secondary": "#6b7280",
          "accent": "#4b5563",
          "neutral": "#242733",
          "base-100": "#111827",
          "info": "#86A6F9",
          "success": "#58DAC5",
          "warning": "#fbbf24",
          "error": "#F36267",
        },
      },
    ],
  },
}
