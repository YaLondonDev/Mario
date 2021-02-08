import { createConnection } from 'typeorm';
import mongoose from 'mongoose';
import { pgDbConfig } from '../utils/consts';

export const dbConnect = async () => {
  await createConnection(pgDbConfig);
  try {
    await mongoose.connect('mongodb://localhost:27017/mario-api', { useNewUrlParser: true });
    console.log('mongo connect success');
  } catch (err) {
    console.error(err);
  }
};
