import { Locator, Page } from '@playwright/test';
import WrapperPage from './WrapperPage';

export class SupplierPage {
  private base: WrapperPage;
  private readonly openDrawerButton: Locator;

  constructor(private page: Page) {
    this.openDrawerButton = this.page.getByRole('button', {
      name: '取引先追加',
    });
    this.base = new WrapperPage(this.page);
  }

  async goToPage() {
    this.base.goToPage('/suppliers');
  }

  async openCreateSupplierModal() {
    await this.openDrawerButton.click();
  }
}
