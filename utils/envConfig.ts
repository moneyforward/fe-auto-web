import { configDotenv } from 'dotenv';
import path from 'path';

configDotenv({ path: path.resolve(__dirname, '../', '.env') });

const envConfig = {
  baseUrl: process.env.BASE_URL || 'https://payable-invoice.test.mfw.work',
  baseUrlAPI: process.env.BASE_URL_API || '',
  email: process.env.EMAIL || 'nguyen.tuan.dat@moneyforward.vn',
  password: process.env.PASSWORD || 'iLR0x@zPE6NT',
  storageState: process.env.STORAGE_STATE || '',
  browser: process.env.BROWSER || '',
};

export default envConfig;
