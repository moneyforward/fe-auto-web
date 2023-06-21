import { Given, Then, When } from '@cucumber/cucumber';
import envConfig from '../../../utils/envConfig';
import { expect } from '../../fixtures/pageFactory';
import { LoginPage } from '../pages/login.page';
import { ICustomWorld } from './custom-world';

let loginPage: LoginPage;

Given(
  'User redirects to "payable-invoice.test.mfw.work"',
  async function (this: ICustomWorld) {
    loginPage = new LoginPage(this.page!);
    await loginPage.goTo();
  }
);

Given('User inputs email', async function (this: ICustomWorld) {
  await loginPage.fillInEmail(envConfig.email);
});

Given(
  'User clicks Agree and Sign in button',
  async function (this: ICustomWorld) {
    await loginPage.onClickAgreeAndSignIn();
  }
);

When('User inputs password', async function (this: ICustomWorld) {
  await loginPage.fillInPassword(envConfig.password);
});

Then('User clicks Sign in button', async function (this: ICustomWorld) {
  await loginPage.onClickSignIn();
});

Then('I should see the homepage', async function (this: ICustomWorld) {
  await expect(this.page!).toHaveTitle(
    '請求書一覧 | マネーフォワード クラウドインボイス [受領]'
  );
});
