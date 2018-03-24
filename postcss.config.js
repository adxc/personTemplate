module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require('precss'),
        require('autoprefixer')({browsers:'last 5 version'}) ,
    ]
}