/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'var(--theme-primary)',
      'primary-dark': 'var(--theme-primary-dark)',
      secondary: 'var(--theme-secondary)',
      'text-base': 'var(--theme-text-base)',
      'text-dark': 'var(--theme-text-dark)',
      'text-darkest': 'var(--theme-text-darkest)',
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      opacity: ['active'],
      textColor: ['active'],
      translate: ['group-hover'],
      borderRadius: ['hover', 'focus'],
    },
  },
};
