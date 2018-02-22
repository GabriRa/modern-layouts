const webpack = require("webpack");

module.exports = {
    // entry: __dirname + "/src/index.js",
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    devServer: {
        contentBase: __dirname + "/public",
        hot: true,
    },
    output: {
        path: __dirname + "/public/build",
        publicPath: "/",
        filename: "build.js",
    },
    module: {
        loaders:[
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}