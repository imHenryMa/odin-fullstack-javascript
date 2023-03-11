const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        main: './src/index.js',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    
    plugins: [
        new BundleAnalyzerPlugin()
    ],

    devServer: {

        static: {
            directory: path.join(__dirname,'public'),
        },
        port: 9000,
    },
}