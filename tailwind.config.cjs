/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--primary1)',
          2: 'var(--primary2)',
          3: 'var(--primary3)',
          4: 'var(--primary4)',
          5: 'var(--primary5)',
          6: 'var(--primary6)',
          7: 'var(--primary7)',
          8: 'var(--primary8)',
          9: 'var(--primary9)',
          10: 'var(--primary10)',
          11: 'var(--primary11)',
          12: 'var(--primary12)',
        },

        gray: {
          1: 'var(--gray1)',
          2: 'var(--gray2)',
          3: 'var(--gray3)',
          4: 'var(--gray4)',
          5: 'var(--gray5)',
          6: 'var(--gray6)',
          7: 'var(--gray7)',
          8: 'var(--gray8)',
          9: 'var(--gray9)',
          10: 'var(--gray10)',
          11: 'var(--gray11)',
          12: 'var(--gray12)',
        },
        indigo: {
          1: 'var(--indigo1)',
          2: 'var(--indigo2)',
          3: 'var(--indigo3)',
          4: 'var(--indigo4)',
          5: 'var(--indigo5)',
          6: 'var(--indigo6)',
          7: 'var(--indigo7)',
          8: 'var(--indigo8)',
          9: 'var(--indigo9)',
          10: 'var(--indigo10)',
          11: 'var(--indigo11)',
          12: 'var(--indigo12)',
        },
        crimson: {
          1: 'var(--crimson1)',
          2: 'var(--crimson2)',
          3: 'var(--crimson3)',
          4: 'var(--crimson4)',
          5: 'var(--crimson5)',
          6: 'var(--crimson6)',
          7: 'var(--crimson7)',
          8: 'var(--crimson8)',
          9: 'var(--crimson9)',
          10: 'var(--crimson10)',
          11: 'var(--crimson11)',
          12: 'var(--crimson12)',
        },
      },
    },
  },
  plugins: [],
}
