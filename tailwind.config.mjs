/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        secondary: '#6dff24',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(at center top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
      },
    },
  },
  plugins: [],
};
