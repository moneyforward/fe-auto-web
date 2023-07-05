import { LaunchOptions } from '@playwright/test';
import { configDotenv } from 'dotenv';
import path from 'path';
configDotenv({ path: path.resolve(__dirname, '../../', '.env') });

const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
  ],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const envConfig = {
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
  baseUrl: process.env.BASE_URL || '',
  baseUrlAPI: process.env.BASE_URL_API || '',
};

export const config = {
  browser: process.env.browser || 'chromium',
  browserOptions,
  IMG_THRESHOLD: { threshold: 0.4 },
  runHeadless: process.env.HEADLESS_MODE === 'TRUE',
  runSlow: 0,
};
