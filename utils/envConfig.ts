import { configDotenv } from 'dotenv';
import path from 'path';

configDotenv({ path: path.resolve(__dirname, '..', '.env') });

const envConfig = {
  baseUrl: process.env.BASE_URL || '',
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
  storageState: process.env.STORAGE_STATE || '',
};

export default envConfig;
