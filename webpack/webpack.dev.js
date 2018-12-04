const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../app/'),
        publicPath: '/dist/',
        compress: true,
        port: 8080,
        hot: true,
        inline: true,
        watchContentBase: true,
        clientLogLevel: 'none',
        stats: 'errors-only'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});