/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient':
          'linear-gradient(to right, #purple-400, #pink-500, #teal-400)',
      },
      colors: {
        backgroundDark: '#030014',
        textPrimary: '#1a202c',
        textPrimaryDark: '#f5f5f5',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
