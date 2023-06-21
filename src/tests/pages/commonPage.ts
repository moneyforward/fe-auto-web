import { Page } from '@playwright/test';

export default class CommonPage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
