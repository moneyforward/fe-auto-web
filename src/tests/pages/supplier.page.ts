import { Locator, Page } from '@playwright/test';
import CommonPage from './commonPage';

export class SupplierPage extends CommonPage {
  private readonly openDrawerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.openDrawerButton = page.getByRole('button', { name: '取引先追加' });
  }

  async goToSupplierPage() {
    await this.page.goto('/suppliers');
  }

  async openCreateSupplierModal() {
    await this.openDrawerButton.click();
  }
}
