/* eslint-disable import/no-extraneous-dependencies */
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import concatFiles from "./concat";
// const packageJson = require("./package.json");

const production = !process.env.ROLLUP_WATCH;

export default [
    {
        input: "index.ts",
        output: [
            {
                format: "esm",
                sourcemap: true,
                dir: "dist",
                preserveModules: true,
            },
        ],
        plugins: [
            commonjs(),
            babel({
                // this is needed because we're using TypeScript
                babelHelpers: "bundled",
                extensions: [".ts", ".tsx"],
            }),
            external(),
            resolve(),
            typescript({
                sourceMap: !production,
                inlineSources: !production,
            }),
            postcss({
                extensions: [".css"],
                extract: "lib.css",
            }),
            terser(),
            filesize(),
            concatFiles({
                src: "./src",
                excludes: ["styles"],
                dest: "./dist",
                name: "style.css",
            }),
        ],
    },
];
