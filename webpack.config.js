var webpack = require('webpack');
var path = require('path');

var appPath = path.resolve(__dirname, 'src/app', 'app.js');
var buildPath = path.resolve(__dirname, 'src');

var webpackConfig = {
    devtool: 'inline-source-map',
    entry: [
        appPath
    ],
    module: {
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }, {
                test: /\.(woff|woff2)$/,
                loader: 'url?prefix=font/&limit=5000&name=fonts/[name].[ext]'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
            },
        ]
    },
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: buildPath,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = webpackConfig;
