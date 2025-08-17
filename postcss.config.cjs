module.exports = {
    plugins: [
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
        require('postcss-prefix-selector')({
            prefix: '.my-lib',
            transform: (prefix, selector, filepath) => {
                if (filepath.includes('src/css/input.css')) {
                    return `${prefix} ${selector}`;
                }
                return selector;
            }
        }),
    ]
};
