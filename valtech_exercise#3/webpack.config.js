const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');   

module.exports = {
   // entry: './src/index.js',
   context: path.resolve(__dirname, './src'),
    entry: {
        test: './index.js',
        vendor: [ 'jquery' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './'),
        //filename: 'test.js',
        //publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, { 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    loader: 'style-loader',
                    use: ['css-loader','autoprefixer-loader','sass-loader'],
                   // publicPath: '/'
                })
            }, { 
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    loader: 'style-loader',
                    use: ['css-loader','autoprefixer-loader'],
                   // publicPath: '/'
                })
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "test.css",
            disable: false,
            allChunks: true
        }), 
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}; 
/*
if(process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin
    )
}
*/

//module.exports = config;
