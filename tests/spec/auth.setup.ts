import envConfig from '../../utils/envConfig';
import { expect, test as setup } from '../fixtures/pageFactory';

const authFile = envConfig.storageState;

setup('authentication', async ({ page, loginPage }) => {
  await loginPage.goToPage('/auth/login');
  await loginPage.login(envConfig.email, envConfig.password);
  await page.waitForURL(envConfig.baseUrl);
  await expect(page).toHaveTitle(
    '請求書一覧 | マネーフォワード クラウドインボイス [受領]'
  );
  await expect(page.getByTestId('page-title')).toContainText(['請求書']);
  await page.context().storageState({ path: authFile });
});
