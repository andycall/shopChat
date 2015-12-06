/**
 * @author dongtiancheng
 * @date 15/12/6.
 * @email dongtiancheng@baidu.com
 */

var webpack = require('webpack')
var path = require('path')

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8090',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'bundle.js',
        publicPath: '/output/'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            },
            {
                test: /\.(scss|css)/,
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config