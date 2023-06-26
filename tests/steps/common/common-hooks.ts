import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  ITestCaseHookParameter,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import {
  ChromiumBrowser,
  FirefoxBrowser,
  WebKitBrowser,
  chromium,
  firefox,
  webkit,
} from '@playwright/test';
import { config } from './config';
import { ICustomWorld } from './custom-world';

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
setDefaultTimeout(60 * 1000);

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

Before(async function (this: ICustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: ICustomWorld) {
  this.debug = true;
});

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
  if (result) {
    await this.attach(
      `Status: ${result?.status}. Duration:${result.duration?.seconds}}s`
    );

    // if (result.status === Status.FAILED) {
    //   const image = await this.pagesObj?.basePage.screenshot('testname');
    //   image && (await this.attach(image, 'image/png'));
    // }
  }
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
