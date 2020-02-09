const {
    height,
    width,
    maxWidth,
    maxHeight,
    colors,
} = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            height: {
                ...height,
                '180': '180px',
            },
            width: {
                ...width,
                '140': '140px',
            },
            maxWidth: {
                ...maxWidth,
                '200': '200px',
                '240': '240px',
                '400': '400px',
                '500': '500px',
                screen: '100vw',
            },
            maxHeight: {
                ...maxHeight,
                '200': '200px',
                '240': '240px',
            },
            colors: {
                ...colors,
                yellow: {
                    ...colors.yellow,
                    burn: '#e69d3f',
                },
            },
        },
    },
    variants: {},
    plugins: [],
};
