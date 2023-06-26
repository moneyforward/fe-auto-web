import { Page } from '@playwright/test';
import envConfig from '../../utils/envConfig';

export default class CommonPage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goToPage(optionalUrl?: string) {
    const pageToGoTo: string = optionalUrl
      ? envConfig.baseUrl + optionalUrl
      : envConfig.baseUrl;
    return await this.page.goto(pageToGoTo);
  }
}
