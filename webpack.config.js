const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');


// eslint-disable-next-line no-console
console.log(`=> bootstrap-loader configuration: ${bootstrapEntryPoints.dev}`);

module.exports = {
    entry: './app/javascripts/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    plugins: [
        // Copy our app's index.html to the build folder.
        new CopyWebpackPlugin([
            {from: './app/index.html', to: "index.html"},
            {from: './app/dashboard/dashboard.html', to: "dashboard.html"},
            {from: './app/dashboard/trading.html', to: "trading.html"},
            
            {from: './app/dashboard/managetoken.html', to: "managetoken.html"},
            {from: './app/dashboard/crypto_converter2.html', to: "crypto_converter2.html"},
            {from: './app/crypto_converter.html', to: "crypto_converter.html"},
            {from: './app/dashboard/cryptodragons.html', to: "cryptodragons.html"},
            {from: './app/dashboard/contact_us2.html', to: "contact_us2.html"},
            {from: './app/dashboard/Home.html', to: "Home.html"},
            {from: './app/contact_us.html', to: "contact_us.html"},
            {from: './app/donate.html', to: "donate.html"},
            {from: './app/team.html', to: "team.html"}
        ]),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']},
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },

            // Bootstrap 3
            {test: /bootstrap-sass\/assets\/javascripts\//, use: 'imports-loader?jQuery=jquery'},

        ],
        loaders: [
            {test: /\.json$/, use: 'json-loader'},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}
