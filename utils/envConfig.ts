import { configDotenv } from 'dotenv';
import path from 'path';

configDotenv({ path: path.resolve(__dirname, '../', '.env') });

const envConfig = {
  baseUrl: process.env.BASE_URL || '',
  baseUrlAPI: process.env.BASE_URL_API || '',
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
  storageState: process.env.STORAGE_STATE || '',
  browser: process.env.BROWSER || '',
};

export default envConfig;
