import { Page } from '@playwright/test';
import { envConfig } from '../support/config';

export default class WrapperPage {
  constructor(private page: Page) {}

  async goToPage(optionalUrl?: string) {
    const pageToGoTo: string = optionalUrl
      ? envConfig.baseUrl + optionalUrl
      : envConfig.baseUrl;
    await this.page.goto(pageToGoTo, { waitUntil: 'domcontentloaded' });
  }

  // async waitAndClick(locator: string) {
  //   const element = this.page.locator(locator);
  //   await element.waitFor({
  //     state: 'visible',
  //   });
  //   await element.click();
  // }

  // async navigateTo(link: string) {
  //   await Promise.all([this.page.waitForNavigation(), this.page.click(link)]);
  // }
}
