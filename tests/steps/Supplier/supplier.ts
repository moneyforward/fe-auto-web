import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SupplierPage } from '../../pages/supplier.page';
import pageLocator from '../../selectors/SUPPLIER_PAGE.json';
import { ICustomWorld } from '../common/custom-world';

let supplierPage: SupplierPage;

// type TypeKeyLocator = keyof typeof pageLocator;

Given('User redirects to supplier page', async function (this: ICustomWorld) {
  supplierPage = new SupplierPage(this.page!);
  await supplierPage.goToPage('/suppliers');
});

Then(
  'Can see tooltip when hovering on delete button',
  async function (this: ICustomWorld) {
    const deleteButton = await this.page!.$(
      pageLocator.SUPPLIER_PAGE_DELETE_BUTTON
    );
    await deleteButton!.hover();

    expect(
      this.page!.locator(pageLocator.SUPPLIER_PAGE_HOVERING_TEXT_DELETE_BUTTON)
    ).toBeDefined();
  }
);
