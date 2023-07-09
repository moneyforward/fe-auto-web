import { Page } from '@playwright/test';
import { envConfig } from '../support/config';

export default class WrapperPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goToPage(optionalUrl?: string) {
    const pageToGoTo: string = optionalUrl
      ? envConfig.baseUrl + optionalUrl
      : envConfig.baseUrl;
    await this.page.goto(pageToGoTo, { waitUntil: 'domcontentloaded' });
  }
}
