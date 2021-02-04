import { createConnection } from 'typeorm';
import { pgDbConfig } from '../utils/consts';

export const dbConnect = async () => {
  await createConnection(pgDbConfig);
  console.log('postgres connect success');
};
