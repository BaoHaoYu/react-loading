const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './test/index.js',

    output: {
        filename: 'bundle.js',

        path: path.resolve(__dirname, '__build__'),
    },

    watch: !0,

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /(node_modules|bower_components)/,
            },

            {
                test: /src.+\.styl$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: !0,
                            importLoaders: 1,
                            sourceMap: !0,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: function () {
                    //             return [
                    //                 require('precss'),
                    //                 require('autoprefixer')({browsers: 'last 100 versions'})
                    //             ];
                    //         }
                    //     }
                    // },
                    {loader: 'stylus-loader'},
                ],
            },

            {
                test: /test.+\.styl$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !0,
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: function () {
                    //             return [
                    //                 require('precss'),
                    //                 require('autoprefixer')({browsers: 'last 100 versions'})
                    //             ];
                    //         }
                    //     }
                    // },
                    {loader: 'stylus-loader'},
                ],
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },

    plugins: [
        // mini
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // env
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // }),
    ]
};