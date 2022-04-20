/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/no-extraneous-dependencies */
const cssnano = require("cssnano");

module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        cssnano({
            preset: "default",
        }),
    ],
};
