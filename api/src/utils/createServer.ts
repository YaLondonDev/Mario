import { Express } from 'express';
import http from 'http';
import https from 'https';
import path from 'path';
import fs from 'fs';

export const createServer = (app: Express) => {
  if (!process.env.SSL_ENABLED) {
    return http.createServer(app);
  }

  return https.createServer(
    {
      key: fs.readFileSync(path.resolve(__dirname, '../../secure/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../../secure/cert.pem')),
    },
    app,
  );
};
