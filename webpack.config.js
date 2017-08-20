const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})
module.exports = {
    entry: './src/index.js',
    output: {
        path:  path.resolve('dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss/,
            loader: ExtractTextPlugin.extract("css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader"),
        },{
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 25000,
                name: '[path][name].[hash].[ext]',
            },
        },]
    },
    devtool: "source-map",
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin("styles.css")

    ]
}


