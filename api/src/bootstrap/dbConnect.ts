import { createConnection } from 'typeorm';
import path from 'path';

export const dbConnect = async () => {
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
    migrations: [`${(path.resolve(__dirname), '../migrations/*.{js,ts}')}`],
    cli: {
      migrationsDir: path.resolve(__dirname, '../migrations'),
    },
    logging: true,
  });
  console.log('postgres connect success');
};
