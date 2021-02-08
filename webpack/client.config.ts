import {
  Configuration,
  WebpackPluginInstance,
  HotModuleReplacementPlugin,
  ProvidePlugin,
} from 'webpack'; // eslint-disable-line
import path from 'path';
import { GenerateSW } from 'workbox-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BUILD_DIR, IS_DEV, IS_SERVE, SRC_DIR } from './env';
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
  mode: 'development',
  cache: false,
  entry: {
    main: [
      IS_DEV && 'react-hot-loader/patch',
      IS_DEV && 'webpack-hot-middleware/client',
      path.join(SRC_DIR, 'index'),
    ].filter((item) => !!item),
  },
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
    publicPath: '/',
  },
  resolve: {
    extensions,
    alias: {
      src: path.resolve(__dirname, '../src'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  stats: {
    errorDetails: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    port: process.env.PORT || 5000,
  },
  plugins: [
    IS_SERVE &&
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
      }),
    // @ts-ignore
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
    new HotModuleReplacementPlugin(),
    new ProvidePlugin({
      process: 'process/browser',
    }),
  ].filter((plugin) => Boolean(plugin)) as WebpackPluginInstance[],
};

export default config;
