module.exports = {
    mode: 'development',
    devtool: 'cheap-source-map',
    entry: './src/index.js',
    target: ['web', 'es5'],
    devServer: {
        port: 8080,
        static: ["./public"]
    },

    output: {
        filename: 'bundle.min.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: require('./babelrc.js')
            }]
        }]
    }
};
