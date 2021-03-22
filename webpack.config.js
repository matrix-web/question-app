const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, './public')
  },
  devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './public'),
      open: true,
      compress: true,
      hot: true,
      port: 8080
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ]
}