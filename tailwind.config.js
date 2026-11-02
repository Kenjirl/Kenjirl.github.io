/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{html,js}',
        '!./node_modules/**',
        '!./tailwind.config.js',
    ],
    theme: {
        extend: {
        colors: {
            'cst-black': '#3b383e',
            'cst-cream': '#e3e1d4',
        },
        fontFamily: {
            macondo: ['"Macondo"', 'cursive'],
        },
        boxShadow: {
            'up-black': '0 8px 1px rgba(59, 56, 63, 1)',
            'down-black': '0 1px 1px rgba(59, 56, 63, 1)',
            'up-cream': '0 8px 1px rgba(227, 225, 212, 1)',
            'down-cream': '0 1px 1px rgba(227, 225, 212, 1)',
        },
        keyframes: {
            'flag-bob': {
            '0%, 100%': { marginTop: '0' },
            '50%': { marginTop: '-4px' },
            },
        },
        animation: {
            'flag-bob': 'flag-bob 2.4s ease-in-out infinite',
        },
        },
    },
    plugins: [],
};