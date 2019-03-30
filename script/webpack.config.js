const path               = require("path");
const webpack            = require("webpack");
const WebpackBar         = require('webpackbar')
const CopyWebpackPlugin  = require("copy-webpack-plugin");

module.exports = {
    entry: {},
    module: {
        rules: [
        ]
    },
    plugins: [
        new WebpackBar({
            minimal: false,
            profile:true,
            name:"任务执行进度"
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, "../resource"), to: path.resolve(__dirname, "../dist/resource") }
        ])
    ]
};
