const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './__test__/index.js',

    output: {
        // 输出文件名
        filename: '[name].js',

        // 输出目录
        path: path.resolve(__dirname, '__test__/dist'),
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

};