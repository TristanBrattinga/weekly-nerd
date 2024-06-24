/** @type {import('tailwindcss').Config} */
const { fontFamily, screens } = require('tailwindcss/defaultTheme')

module.exports = {
    safelist: ['swiper-slide'],
    mode: 'jit',
    variants: {
        margin: ['responsive', 'hover', 'last'],
    },
    darkMode: 'class',
    theme: {
        container: {
            screens: {
                ...screens,
                xl: '1440px',
            },
            center: true,
            padding: '20px',
        },
        extend: {
            screens: {
                lg: '1200px',
                xl: '1440px',
            },

            colors: {
                'grey-base': '#202124',
                accent: '#5ba7c2',
            },
            fontFamily: {
                nohemi: ['var(--font-nohemi)', ...fontFamily.sans],
                inter: ['var(--font-inter)', ...fontFamily.sans],
            },
        },
    },
    plugins: [],
}
