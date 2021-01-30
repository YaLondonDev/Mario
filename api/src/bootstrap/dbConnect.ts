import { createConnection } from 'typeorm';
import mongoose from 'mongoose';
import path from 'path';

export const dbConnect = async () => {
  try {
    await createConnection({
      name: 'postgres',
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER || 'mario',
      password: process.env.POSTGRES_PASS || 'mario',
      database: process.env.POSTGRES_DB || 'mario-api',
      synchronize: true,
      entities: [`${path.resolve(__dirname, '../entities/postgres/*.{js,ts}')}`],
      logging: true,
    });
    console.log('postgres connect success');
  } catch (err) {
    console.error(err);
  }

  try {
    await mongoose.connect('mongodb://localhost:27017/mario-api', { useNewUrlParser: true });
    console.log('mongo connect success');
  } catch (err) {
    console.error(err);
  }
};
