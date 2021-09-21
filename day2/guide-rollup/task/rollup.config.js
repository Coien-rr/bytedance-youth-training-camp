import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
export default{
    input: "./index.js",
    output: [
        {
            file: "dist/bundle.esm.js",
            format: "esm",
            plugins: [terser()],
        },
        {
            file: "dist/bundle.cjs.js",
            format: "cjs",
        },
    ],
    plugins: [resolve(), commonjs(), json()],
    external: ["vue"]
}