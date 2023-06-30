import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InvoicePage } from '../../pages/invoice.page';
import pageLocator from '../../selectors/INVOICE_PAGE.json';
import { ICustomWorld } from '../common/custom-world';

let invoicePage: InvoicePage;

Given('User redirects to invoice page', async function (this: ICustomWorld) {
  invoicePage = new InvoicePage(this.page!);
  await invoicePage.goToPage('/invoices');
});

Then(
  'User can see the invoice page title',
  async function (this: ICustomWorld) {
    await expect(this.page!).toHaveTitle(
      pageLocator.INVOICE_PAGE_INVOICE_TITLE
    );
  }
);
