const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        main: './_ts/app.tsx'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devServer: {
        contentBase: './wwwroot/js',
        hot: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx']
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
    }
};