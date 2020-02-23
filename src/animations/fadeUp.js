const easing = [0.6, -0.05, 0.01, 0.99];

export default {
    fadeup: {
        y: 60,
        opacity: 0,
    },
    normal: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
    exit: {
        y: 60,
        opacity: 0,
    },
};
