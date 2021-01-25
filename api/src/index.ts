import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';

import { app } from './server';
import { dbConnect } from './bootstrap/dbConnect';

const server = !process.env.SSL_ENABLED
  ? http.createServer(app)
  : https.createServer(
      {
        key: fs.readFileSync(path.resolve(__dirname, '../secure/key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, '../secure/cert.pem')),
      },
      app,
    );

async function start() {
  const port = process.env.PORT || 4444;

  await dbConnect();

  server.listen(port, () => {
    console.log(
      `api listen on ${
        process.env.SSL_ENABLED ? 'https' : 'http'
      }://127.0.0.1:${port}`,
    );
  });
}

start();
