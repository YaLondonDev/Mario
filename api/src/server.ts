import express from 'express';
import cors from 'cors';

import { appRouter } from './routes/appRouter';

const app = express();

app
  .use(
    cors({
      origin: 'http://localhost:5000',
    }),
  )
  .use(express.json())
  .use(appRouter);

export { app };
