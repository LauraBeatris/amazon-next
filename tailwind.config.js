const {
    height,
    width,
    maxWidth,
    maxHeight,
    colors,
    inset,
} = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            inset: {
                ...inset,
                5: '5px',
            },
            height: {
                ...height,
                '180': '180px',
                '200': '200px',
                '300': '300px',
                '400': '400px',
            },
            width: {
                ...width,
                '140': '140px',
                layout: 'calc(100vw - 80px)',
            },
            maxWidth: {
                ...maxWidth,
                '200': '200px',
                '240': '240px',
                '400': '400px',
                '480': '480px',
                '500': '500px',
                screen: '100vw',
                '700': '700px',
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
