const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                },
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '',
        filename: 'react-maplytic.js',
        libraryTarget: 'umd',
        auxiliaryComment: 'A library to use with Maplytic'
    }
};