import { Locator, Page } from '@playwright/test';
import CommonPage from './commonPage';

export class InvoicePage extends CommonPage {
  private readonly invoiceButtonMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.invoiceButtonMenu = page.getByRole('button', { name: '請求書' });
  }

  async goToInvoicePage() {
    await this.page.goto('/invoices');
    this.invoiceButtonMenu.click();
  }
}
