const { maxWidth, maxHeight } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            maxWidth: {
                ...maxWidth,
                '200': '200px',
                '400': '400px',
            },
            maxHeight: {
                ...maxHeight,
                '200': '200px',
            },
        },
    },
    variants: {},
    plugins: [],
};
