import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  ITestCaseHookParameter,
  Status,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import {
  ChromiumBrowser,
  ConsoleMessage,
  FirefoxBrowser,
  WebKitBrowser,
  chromium,
  firefox,
  webkit,
} from '@playwright/test';
import fs from 'fs';
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

Before(async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, '-');
  this.context = await browser.newContext({
    recordVideo: {
      dir: 'test-results/videos',
    },
  });
  await this.context.tracing.start({ screenshots: true, snapshots: true });
  const page = await this.context.newPage();
  this.page = page;
  this.page.on('console', async (msg: ConsoleMessage) => {
    if (msg.type() === 'log') {
      await this.attach(msg.text());
    }
  });
});

Before(
  { tags: '@auth' },
  async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
    this.context = await browser.newContext({
      storageState: getStorageState(),
      recordVideo: {
        dir: 'test-results/videos',
      },
    });
    await this.context.tracing.start({ screenshots: true, snapshots: true });
    this.startTime = new Date();
    this.testName = pickle.name.replace(/\W/g, '-');
    const page = await this.context.newPage();
    this.page = page;
  }
);

Before({ tags: '@ignore' }, async function () {
  return 'skipped';
});

Before({ tags: '@debug' }, async function () {
  this.debug = true;
});

After(async function (
  this: ICustomWorld,
  { pickle, result }: ITestCaseHookParameter
) {
  if (result?.status === Status.FAILED) {
    const img = await this.page!.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: 'png',
    });
    this.attach(img, 'image/png');
    // Replace : with _ because colons aren't allowed in Windows paths
    const timePart = this.startTime
      ?.toISOString()
      .split('.')[0]
      .replaceAll(':', '_');

    await this.context?.tracing.stop({
      path: `test-results/traces/${this.testName}-${timePart}trace.zip`,
    });
  }
  await this.page!.close();
  await this.context!.close();
});

AfterAll(async function () {
  await browser.close();
});

function getStorageState() {
  const fileName = 'src/helper/auth/user.json';
  if (fs.existsSync(fileName)) {
    // Reuse existing authentication state if any.
    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
  }
  return undefined;
}
