const easing = [0.6, -0.05, 0.01, 0.99];

export default {
    initial: {
        x: 100,
        opacity: 0,
    },
    slidein: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: easing,
        },
    },
    slideout: {
        x: 100,
        opacity: 0,
    },
};
