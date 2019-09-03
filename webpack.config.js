const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // new line



module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',  // new line
  devServer: {                 // new line
   contentBase: './dist'      // new line
 },
 plugins: [
   new UglifyJsPlugin({ sourceMap: true }),
   new CleanWebpackPlugin(['dist']),
   new HtmlWebpackPlugin({
     title: 'Ping Pong',
     template: './src/index.html',
     inject: 'body'
   })
 ],
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
     test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader"
   }
  ]
 }
};
