const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

/**
 *
 * @param {string} dir
 * @returns {string} Directory path using OS dir path
 */
const makePath = (dir) => path.resolve(__dirname, dir);

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: makePath('./index.tsx'),
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              esModule: true,
            },
          },
        ],
        include: /\.module\.css$/i,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/i,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: false,
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new EslintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      failOnError: false,
    }),
  ].filter(Boolean),
  /** @type {import("webpack-dev-server").Configuration} */
  devServer: {
    contentBase: makePath('./dist'),
    hot: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
  devtool: isDevelopment ? 'inline-source-map' : undefined,
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: [makePath('modules'), 'node_modules'],
    alias: {
      'test-utils': makePath('modules/test-utils/'),
    },
  },
  output: {
    path: makePath('./dist'),
    filename: 'index.bundle.js',
    clean: true,
    publicPath: '/',
  },
};
