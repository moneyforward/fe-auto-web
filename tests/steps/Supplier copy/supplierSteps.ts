import { Given, Then } from '@cucumber/cucumber';
import { expect } from '../../fixtures/pageFactory';
import { SupplierPage } from '../../pages/supplier.page';
import pageLocator from '../../selectors/SUPPLIER_PAGE.json';
import { ICustomWorld } from '../common/custom-world';

let supplierPage: SupplierPage;

Given('User redirects to suppliers page', async function (this: ICustomWorld) {
  supplierPage = new SupplierPage(this.page!);
  await supplierPage.goToPage('/suppliers');
});

Then(
  'User can see the supplier page title',
  async function (this: ICustomWorld) {
    await expect(this.page!).toHaveTitle(
      pageLocator.SUPPLIER_PAGE_SUPPLIER_TITLE
    );
  }
);
