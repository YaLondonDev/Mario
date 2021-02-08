import path from 'path';
import { ConnectionOptions } from 'typeorm';

export const API_PREFIX = 'api';
export const API_VERSION = 1;

export const HTTP_ERRORS = {
  INVALID_CREDENTIALS: {
    error: 'Invalid credentials',
    statusCode: 400,
  },
};

export const pgDbConfig: ConnectionOptions = {
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
};

export const yaApiEndpoint =
  process.env.API_ENDPOINT || 'https://ya-praktikum.tech/api/v2/auth/user';
