var path = require('path');
var webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
        main: './_ts/app.tsx'
    },
    devtool: 'source-map',
    output: {
        filename: 'main.js',
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
                test: /\.ts|\.tsx$/,
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