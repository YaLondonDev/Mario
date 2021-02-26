import { app } from './server';
import { dbConnect } from './bootstrap/dbConnect';
import { createServer } from './utils/createServer';

const server = createServer(app);

async function start() {
  const port = process.env.API_PORT || 4444;

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
