import path from 'path';
import { Configuration } from 'webpack'; // eslint-disable-line
import nodeExternals from 'webpack-node-externals'; // eslint-disable-line
import { SRC_DIR, BUILD_DIR } from './env';

import fileLoader from './loaders/file';
import svgLoader from './loaders/svg';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import extensions from './extensions';

const config: Configuration = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: path.join(SRC_DIR, 'server'),
  module: {
    rules: [
      jsLoader.server,
      fileLoader.server,
      svgLoader.server,
      cssLoader.server,
    ],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: BUILD_DIR,
    publicPath: '/static/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions,
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
  },
  devtool: 'source-map',
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  optimization: { nodeEnv: false },
};

export default config;
