const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    cache: true
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    { 
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    { 
                        loader: 'css-loader' ,
                        options: {
                            sourceMap: true
                        }
                    },
                    { 
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    { 
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/styles/config/_colors.scss',
                                './src/styles/config/_media-queries.scss',
                                './src/styles/config/_mixins.scss',
                                './src/styles/config/_typography.scss',
                                './src/styles/config/_z-index.scss'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        HTMLWebpackPluginConfig,
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['last 3 versions', '> 1%'],
                    }),
                ],
            },
        }),
        new CopyWebpackPlugin([
            { 
                from: 'assets/**/*',
                context: 'src'
            }
        ])
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    }
}