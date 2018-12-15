const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 8080,
        watchContentBase: true,
        clientLogLevel: 'none',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});