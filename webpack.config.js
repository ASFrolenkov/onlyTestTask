const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(png|gif|jpe?g)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(svg)$/,
                type: 'asset/inline',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },  
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: 'app.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 4000,
    },
}