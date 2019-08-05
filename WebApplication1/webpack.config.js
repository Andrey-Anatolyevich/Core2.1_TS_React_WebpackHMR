var path = require('path');
var webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
        app: './_ts/app.tsx'
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot', 'js'),
        publicPath: 'js/'
    },
    devServer: {
        contentBase: './wwwroot/js',
        hot: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};