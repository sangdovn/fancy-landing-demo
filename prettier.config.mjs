/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: "lf",
  printWidth: 88,
  bracketSpacing: true,
  arrowParens: "always",
  jsxSingleQuote: false,
  bracketSameLine: false,
};

export default config;
