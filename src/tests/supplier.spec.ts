import { expect, test } from '../fixtures/pageFactory';

test.describe('Supplier Page', () => {
  test('Should open supplier page', async ({ page, supplierPage }) => {
    supplierPage.goToSupplierPage();
    await expect(page.getByTestId('page-title')).toContainText(['取引先']);
    await expect(page).toHaveURL(/.*suppliers/);
  });

  test('Open create supplier drawer', async ({ page, supplierPage }) => {
    supplierPage.goToSupplierPage();
    supplierPage.openCreateSupplierModal();
    await expect(page.locator('.ant-drawer-title h2')).toHaveText('取引先追加');
  });
});
