const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, '../dll');

module.exports = {
    mode: 'development',
    entry: {
        app: [
            'antd',
            'babel-polyfill',
            'classnames',
            'echarts',
            'echarts-for-react',
            'es6-promise',
            'history',
            'intl',
            'js-cookie',
            'md5',
            'moment',
            'react',
            'react-dom',
            'react-intl',
            'react-router'
        ]
    },

    output: {
        path: path.join(__dirname, '../dll'),
        filename: '[name].js',
        library: '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../dll/[name]-manifest.json'),
            name: '[name]',
            context: __dirname
        }),
    ],
};
