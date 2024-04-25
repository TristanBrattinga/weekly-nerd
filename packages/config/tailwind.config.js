/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    safelist: ['swiper-slide'],
    mode: 'jit',
    variants: {
        margin: ['responsive', 'hover', 'last'],
    },
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '20px',
            screens: {
                xl: '1440px',
            },
        },
    },
    plugins: [],
}
