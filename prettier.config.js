/** @type {import('prettier').Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 120,
  pluginSearchDirs: ["."],
  tailwindConfig: "./tailwind.config.ts",
}
