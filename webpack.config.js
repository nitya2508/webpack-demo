// const HtmlWebpackPlugin = require("html-webpack-plugin");


// module.exports = {
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Webpack example",
//     }),
//   ],
// };

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack example",
        }),
    ],
};
