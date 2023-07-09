import { Locator, Page } from '@playwright/test';
import WrapperPage from './WrapperPage';

export class SupplierPage extends WrapperPage {
  private readonly openDrawerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.openDrawerButton = this.page.getByRole('button', {
      name: '取引先追加',
    });
  }

  async openCreateSupplierModal() {
    await this.openDrawerButton.click();
  }
}
