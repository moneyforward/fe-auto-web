import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  Status,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import {
  BrowserContext,
  ChromiumBrowser,
  FirefoxBrowser,
  WebKitBrowser,
  chromium,
  firefox,
  webkit,
} from '@playwright/test';
import { createLogger } from 'winston';
import { options } from '../helper/utils/logger';
import { config } from './config';
import { fixture } from './fixture';

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
let context: BrowserContext;
setDefaultTimeout(60 * 1000);

// BeforeAll run before any scenario is run.
BeforeAll(async function () {
  const commonBrowserOptions = {
    ...config.browserOptions,
    headless: config.runHeadless,
    slowMo: config.runSlow,
  };

  switch (config.browser) {
    case 'firefox':
      browser = await firefox.launch(commonBrowserOptions);
      break;
    case 'webkit':
      browser = await webkit.launch(commonBrowserOptions);
      break;
    case 'chrome':
      browser = await chromium.launch({
        ...commonBrowserOptions,
        channel: 'chrome',
      });
      break;
    default:
      browser = await chromium.launch(commonBrowserOptions);
  }
});

// It will trigger for auth scenarios
Before('@auth', async function ({ pickle }) {
  const scenarioName = pickle.name + pickle.id;
  context = await browser.newContext({
    storageState: getStorageState(pickle.name),
    recordVideo: {
      dir: 'test-results/videos',
    },
  });
  const page = await context.newPage();
  fixture.page = page;
  fixture.logger = createLogger(options(scenarioName));
});

// Before hooks run before the first step of each scenario
Before(async function () {
  context = await browser.newContext({
    recordVideo: {
      dir: 'test-results/videos',
    },
  });
  const page = await context.newPage();
  fixture.page = page;
});

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

// After hooks run after the last step of each scenario, even when the step result is failed, undefined, pending, or skipped.
After(async function ({ pickle, result }) {
  if (result?.status === Status.FAILED) {
    // using AfterStep to take a screenshot after each step
    const img = await fixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: 'png',
    });
    this.attach(img, 'image/png');
  }
  await fixture.page.close();
  await context.close();
});

// AfterAll run after all scenarios have been executed.
AfterAll(async function () {
  await browser.close();
});

type TStorage = {
  cookies: {
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: 'Strict' | 'Lax' | 'None';
  }[];
  origins: {
    origin: string;
    localStorage: { name: string; value: string }[];
  }[];
};
function getStorageState(user: string): string | TStorage {
  if (user.endsWith('user')) return 'src/helper/auth/user.json';
  return '';
}
