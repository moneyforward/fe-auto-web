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
import { config } from './config';
import { ICustomWorld } from './custom-world';
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

// Before hooks run before the first step of each scenario
Before(async function (this: ICustomWorld) {
  context = await browser.newContext({
    // recordVideo: {
    //   dir: 'test-results/videos',
    // },
  });
  const page = await context.newPage();
  fixture.page = page;
});

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: ICustomWorld) {
  this.debug = true;
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
