const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/public/index.html`,
  filename: 'index.html',
  inject: 'body',
  hash: true,
  favicon: `${__dirname}/public/favicon.ico`,
  title: 'Yahoo Product Listing',
});

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node-modules/,
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=1024&name=[sha512:hash:base64:7].[ext]',
      },
    ],
  },
  devtool: 'eval',
  // config for webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    inline: true,
    port: 5000,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), HTMLWebpackPluginConfig],
};
