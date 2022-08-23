const webpack = require('webpack');
const path = require('path');

const root = path.resolve(__dirname, 'src');
const dest = path.resolve( __dirname, '.tmp' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: root,
    resolve: {
        extensions: ['.js']
    },
    devtool: 'cheap-module-source-map',
    entry: './index.js',
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: "../"
                })
            }, {
                test: /\.html$/,
                exclude: /index.html$/,
                use: 'raw-loader'
            }, 
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                    },
                }],
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader?outputPath=fonts/'
            },
        ]
    },
    output: {
        path: dest,
        filename: 'js/index.js'
    },
    devServer: {
        contentBase: dest,
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Pig Latin Converter',
            template: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
        }),
        new ExtractTextPlugin('css/style.css')
    ]
};