import { Before, Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import pageLocator from '../../locators/SUPPLIER_PAGE.json';
import { SupplierPage } from '../../pages/SupplierPage';

let supplierPage: SupplierPage;
Before(function () {
  supplierPage = new SupplierPage(this.page!);
});

Given('User redirects to supplier page', async function () {
  await supplierPage.goToPage('/suppliers');
});

Then('Can see tooltip when hovering on delete button', async function () {
  const deleteButton = await this.page!.$(
    pageLocator.SUPPLIER_PAGE_DELETE_BUTTON
  );
  await deleteButton!.hover();

  expect(
    this.page!.locator(pageLocator.SUPPLIER_PAGE_HOVERING_TEXT_DELETE_BUTTON)
  ).toBeDefined();
});

Then('', async function () {});
