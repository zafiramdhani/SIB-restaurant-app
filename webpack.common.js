/* eslint-disable prefer-regex-literals */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://restaurant-api.dicoding.dev/',
          ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'dicoding_api',
          },
        },
        {
          urlPattern: new RegExp(
            'https://kit.fontawesome.com/',
          ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'fontawesome',
          },
        },
        {
          urlPattern: new RegExp(
            'https://fonts.googleapis.com/',
          ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts',
          },
        },
      ],
      ignoreURLParametersMatching: [/.*/],
    }),
  ],
};
