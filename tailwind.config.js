module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.jsx',
        './src/**/*.css',
    ],
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
