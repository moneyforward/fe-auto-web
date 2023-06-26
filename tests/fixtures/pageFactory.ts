import { test as baseTest } from '@playwright/test';
import { InvoicePage } from '../pages/invoice.page';
import { LoginPage } from '../pages/login.page';
import { SupplierPage } from '../pages/supplier.page';

type pages = {
  loginPage: LoginPage;
  supplierPage: SupplierPage;
  invoicePage: InvoicePage;
};

const pageManager = baseTest.extend<pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  supplierPage: async ({ page }, use) => {
    await use(new SupplierPage(page));
  },
  invoicePage: async ({ page }, use) => {
    await use(new InvoicePage(page));
  },
});

export const test = pageManager;
export const expect = pageManager.expect;
