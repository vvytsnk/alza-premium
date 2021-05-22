const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CSSMQPackerPlugin = require('css-mqpacker-webpack-plugin');

const entry = {
    main: './src/app.js'
};

const publicPath = path.resolve(__dirname, './dist');

const copy = [
    {
        from: './src/img',
        to: 'img'
    }
];

module.exports = {
    entry: entry,
    stats: {
        children: true
    },
    output: {
        path: publicPath,
        publicPath: './../',
        filename: 'js/[name].js',
        assetModuleFilename: 'js/[name][ext]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: copy
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new ImageMinimizerPlugin({
            cache: 'cache',
            minimizerOptions: {
                plugins: [
                    [
                        'pngquant',
                        {
                            speed: 1,
                            strip: true,
                            quality: [0.95, 1]
                        }
                    ],
                    [
                        'zopfli',
                        {
                            more: true
                        }
                    ],
                    [
                        'mozjpeg',
                        {
                            quality: 55,
                            progressive: true
                        }
                    ],
                    [
                        'giflossy',
                        {
                            optimizationLevel: 3,
                            optimize: 3,
                            lossy: 2
                        }
                    ],
                    [
                        'svgo',
                        {
                            plugins: [
                                {
                                    removeViewBox: true
                                }
                            ]
                        }
                    ]
                ]
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(gif|png|jpe?g|ico|svg)$/i,
                loader: 'url-loader',
                options: {
                    name: 'img/[name].[ext]',
                    emitFile: true,
                    limit: 8192
                }
            },
            {
                test: /\.(eot|woff2|woff|ttf)$/i,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                }
            }
        ]
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                extractComments: {
                    condition: false
                }
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true }
                        }
                    ]
                }
            }),
            // new CSSMQPackerPlugin()
        ]
    }
};
