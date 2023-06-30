import { LaunchOptions } from '@playwright/test';
import envConfig from '../../../utils/envConfig';
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

export const config = {
  browser: envConfig.browser,
  browserOptions,
  BASE_URL: envConfig.baseUrl,
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: envConfig.baseUrlAPI,
  runHeadless: true,
  runSlow: 0,
};
