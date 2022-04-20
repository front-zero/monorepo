/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const filterPostCSSLoader = (array) =>
    array.filter((object) => JSON.stringify(object).includes("postcss-loader"));

const rewritePostCss = (config, options) => {
    // find any first matching rule that contains postcss-loader
    filterPostCSSLoader(config.module.rules).forEach((rule) => {
        filterPostCSSLoader(rule.oneOf).forEach((oneOf) => {
            filterPostCSSLoader(oneOf.use || oneOf.loader).forEach((use) => {
                // use the latest version of postcss-loader
                use.loader = require.resolve("postcss-loader");

                // conditionally replace options with a custom configuration
                use.options.postcssOptions = options
                    ? Object.assign({ ident: "postcss" }, options)
                    : Object.assign(use.options, options);
            });
        });
    });

    // return the mutated configuration
    return config;
};

// return a filtered array that includes postcss-loader

module.exports = (config) => {
    // Remove the ModuleScopePlugin which throws when we try to import something
    // outside of src/.
    config.resolve.plugins.pop();

    rewritePostCss(config, {});

    // Resolve the path aliases.
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    // Let Babel compile outside of src/.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    const tsRule = oneOfRule.oneOf.find((rule) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        rule.test.toString().includes("ts|tsx")
    );
    tsRule.include = undefined;
    tsRule.exclude = /node_modules/;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
};
