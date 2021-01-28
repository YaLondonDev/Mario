import express from 'express';
import cors from 'cors';

import { appRouter } from './routes/appRouter';

const app = express();

app
  .use(
    cors({
      origin: process.env.ORIGIN || 'http://localhost:5000',
      credentials: true,
    }),
  )
  .use(express.json())
  .use(appRouter);

export { app };
