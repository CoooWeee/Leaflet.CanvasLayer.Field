// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './_main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'leaflet.canvaslayer.field.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
          context: path.resolve(__dirname),
          extensions: ['js'],
          overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
          emitError: true,
          emitWarning: true,
          failOnError: false
        }),
        new WebpackShellPluginNext({
            onBuildStart: ['echo "Webpack Start"'],
            onBuildEnd: ['node copy-to-examples.js']
        }),
    ],
};

module.exports = config;
