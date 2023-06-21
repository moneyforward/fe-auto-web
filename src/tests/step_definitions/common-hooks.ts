import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber';
import { ChromiumBrowser, chromium } from '@playwright/test';
import { ICustomWorld } from './custom-world';

let browser: ChromiumBrowser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

Before(async function (this: ICustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: ICustomWorld) {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
