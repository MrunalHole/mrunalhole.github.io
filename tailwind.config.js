/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary color scheme - Soft dark blue-gray
        dark: {
          bg: '#0f172a',      // Main background
          card: '#1e293b',    // Card backgrounds
          border: '#334155',  // Borders
          hover: '#475569',   // Hover states
        },
        // Alternative: Modern charcoal (commented out - uncomment to try)
        // dark: {
        //   bg: '#1a1a1a',
        //   card: '#262626',
        //   border: '#404040',
        //   hover: '#525252',
        // },
        accent: {
          primary: '#3b82f6',   // Blue
          secondary: '#8b5cf6', // Purple
          tertiary: '#ec4899',  // Pink
          success: '#10b981',   // Green
          warning: '#f59e0b',   // Orange
        },
        text: {
          primary: '#f8fafc',   // Warm white
          secondary: '#cbd5e1', // Light gray
          muted: '#94a3b8',     // Muted gray
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}