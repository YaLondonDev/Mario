import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies

const { GenerateSW } = require('workbox-webpack-plugin');

const googleFontsPattern = new RegExp(
  '^https://fonts.(?:googleapis|gstatic).com/(.*)',
);

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: 'src/styles/_variables.scss',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    port: process.env.PORT || 9000,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.svg', '.png', '.jpg'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /images/,
          handler: 'CacheFirst',
        },
        {
          urlPattern: googleFontsPattern,
          handler: 'CacheFirst',
        },
        {
          urlPattern: /.*/,
          handler: 'NetworkFirst',
        },
      ],
    }),
  ],
};
