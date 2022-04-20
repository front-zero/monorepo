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
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "../../node_modules/@ht/components/src/**/*.tsx",
        "../../node_modules/@ht/components/src/**/**/*.tsx",
        "../../node_modules/@ht/components/src/**/**/**/*.tsx",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
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
            flex: {
                full: "1 0 100%",
            },
        },
        container: {
            center: true,
            padding: "15px",
            screens: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
            },
        },
    },
    plugins: [
        require("tailwindcss-nested-groups"),
        plugin(function ({ addVariant }) {
            // Add a `third` variant, ie. `third:pb-0`
            addVariant("third", "&:nth-child(3)");
        }),
    ],
};
