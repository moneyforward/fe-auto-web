import { Before, Given } from '@cucumber/cucumber';
import { ICustomWorld } from '../../../support/custom-world';
import { SupplierPage } from '../../pages/SupplierPage';

let supplierPage: SupplierPage;
Before(function (this: ICustomWorld) {
  supplierPage = new SupplierPage(this.page!);
});

Given('User redirects to supplier page', async function () {
  await supplierPage.goToPage('/suppliers');
});
