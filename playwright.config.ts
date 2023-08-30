import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'src',

  // Run all tests in parallel.
  // should be false as we are ordering the test
  fullyParallel: false,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'https://external-api.payable-invoice.test.mfw.work/rest/api/v1/',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
    extraHTTPHeaders: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
