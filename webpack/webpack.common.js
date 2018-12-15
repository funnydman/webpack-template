const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./index.js",
    module: {
        rules: [
            {
                test: /\.html$/, use: ['html-loader?interpolate']
            },
            {
                test: /\.(sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/, use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'img/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
            favicon: 'app/asserts/img/fav.ico'
        }),
        new MiniCssExtractPlugin({
            filename: "main.bundle.css"
        })
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    }
};