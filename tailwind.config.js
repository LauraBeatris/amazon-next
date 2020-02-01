const { height, maxWidth, maxHeight } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            height: {
                ...height,
                '180': '180px',
            },
            maxWidth: {
                ...maxWidth,
                '200': '200px',
                '240': '240px',
                '400': '400px',
            },
            maxHeight: {
                ...maxHeight,
                '200': '200px',
                '240': '240px',
            },
        },
    },
    variants: {},
    plugins: [],
};
