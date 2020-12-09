import { Configuration, WebpackPluginInstance } from 'webpack'; // eslint-disable-line
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // eslint-disable-line
import { GenerateSW } from 'workbox-webpack-plugin';

import { BUILD_DIR, PUBLIC_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import svgLoader from './loaders/svg';
import extensions from './extensions';
import jsLoader from './loaders/js';

type DevServerConfiguration = {
  devServer: {
    historyApiFallback: boolean;
    port: string | number;
    contentBase: string;
    compress: boolean;
  };
};

const googleFontsPattern = new RegExp(
  '^https://fonts.(?:googleapis|gstatic).com/(.*)',
);

const config: Configuration & DevServerConfiguration = {
  name: 'client',
  entry: path.join(SRC_DIR, 'index'),
  module: {
    rules: [
      jsLoader.client,
      fileLoader.client,
      cssLoader.client,
      svgLoader.client,
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  resolve: {
    extensions,
  },
  stats: {
    errorDetails: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    port: process.env.PORT || 9000,
  },
  plugins: [
    // @ts-ignore
    process.env.MODE?.trim() === 'development' &&
      new HtmlWebpackPlugin({
        template: path.resolve(PUBLIC_DIR, 'index.html'),
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
  ].filter((plugin) => Boolean(plugin)) as WebpackPluginInstance[],
};

export default config;
