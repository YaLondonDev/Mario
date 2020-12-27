import {
  Configuration,
  WebpackPluginInstance,
  HotModuleReplacementPlugin,
} from 'webpack'; // eslint-disable-line
import path from 'path';
import { GenerateSW } from 'workbox-webpack-plugin';

import { BUILD_DIR, IS_DEV, SRC_DIR } from './env';
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
    port: process.env.PORT || 9000,
  },
  plugins: [
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
  ].filter((plugin) => Boolean(plugin)) as WebpackPluginInstance[],
};

export default config;
