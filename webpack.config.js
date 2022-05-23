const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({
  entry: './app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.jsx?$/, use: 'swc-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve('./public/index.html'),
    inject: 'body',
    filename: 'index.html',
  })],
  devServer: {
    contentBase: false,
    disableHostCheck: true,
    compress: true,
    inline: true,
    hot: true,
    port: 9000,
    quiet: false,
    open: 'http://localhost:9000',
  },
})
