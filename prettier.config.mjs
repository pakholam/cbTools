/** @type {import('prettier').Config} */
const config = {
    semi: true,
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    plugins: ['prettier-plugin-tailwindcss'],
}
export default config;