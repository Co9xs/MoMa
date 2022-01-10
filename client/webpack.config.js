const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, './src');
const PUBLIC_PATH = path.resolve(__dirname, '../public');
const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    static: [PUBLIC_PATH],
  },
  entry: {
    style: path.resolve(SRC_PATH, './index.css'),
    main: path.resolve(SRC_PATH, './index.tsx'),
  },
  output: {
    path: DIST_PATH,
    filename: 'scripts/[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { url: false } },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new RemoveEmptyScriptsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, './index.html'),
      publicPath: '/',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  target: ['web', 'es5'],
};
