import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { IS_DEV } from '../webpack/env';
import config from '../webpack/client.config';
import serverRenderMiddleware from './server-render-middleware';

const app = express();
const compiler = webpack(config);

app.use(express.static(path.resolve(__dirname, '../build')));
if (IS_DEV) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
    }),
  );
  app.use(
    webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }),
  );
}
app.get('*', serverRenderMiddleware);

export { app };
