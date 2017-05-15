const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './test/index.js',

    output: {
        // 输出文件名
        filename: 'bundle.js',

        // 输出目录
        path: path.resolve(__dirname, 'build'),
    },

    watch: !0,

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !0
                        }
                    },
                    'stylus-loader',
                ]
            },
        ],
    },
    plugins: [
        // mini
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // env
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // }),
    ]
};