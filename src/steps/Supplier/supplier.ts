import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import pageLocator from '../../locators/SUPPLIER_PAGE.json';
import { SupplierPage } from '../../pages/SupplierPage';
import { fixture } from '../../support/fixture';

// type TypeKeyLocator = keyof typeof pageLocator;
let supplierPage: SupplierPage;

Given('User redirects to supplier page', async function () {
  supplierPage = new SupplierPage(fixture.page);
  await supplierPage.goToPage();
});

Then('Can see tooltip when hovering on delete button', async function () {
  const deleteButton = await fixture.page.$(
    pageLocator.SUPPLIER_PAGE_DELETE_BUTTON
  );
  await deleteButton!.hover();

  expect(
    fixture.page.locator(pageLocator.SUPPLIER_PAGE_HOVERING_TEXT_DELETE_BUTTON)
  ).toBeDefined();
});
