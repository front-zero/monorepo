/* eslint-disable import/no-extraneous-dependencies */
const {
    colors,
    screens,
    fontFamily,
    fontSize,
    lineHeight,
    boxShadow,
    letterSpacing,
    spacing,
    backgroundImage,
    keyframes,
    animation,
    animationDelay,
} = require("@ht/shared/theme");

module.exports = {
    content: ["./src/**/*.{jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                ...screens,
            },
            colors: {
                ...colors,
            },
            fontFamily: {
                ...fontFamily,
            },
            fontSize: {
                ...fontSize,
            },
            lineHeight: {
                ...lineHeight,
            },
            boxShadow: {
                ...boxShadow,
            },
            letterSpacing: {
                ...letterSpacing,
            },
            spacing: {
                ...spacing,
            },
            backgroundImage: {
                ...backgroundImage,
            },
            keyframes: {
                ...keyframes,
            },
            animation: {
                ...animation,
            },
            animationDelay: {
                ...animationDelay,
            },
        },
    },
    plugins: [
        require("tailwindcss-nested-groups"),
        require("tailwindcss-animation-delay"),
    ],
};
