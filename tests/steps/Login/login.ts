import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import envConfig from '../../../utils/envConfig';
import { LoginPage } from '../../pages/login.page';
import pageLocator from '../../selectors/LOGIN_PAGE.json';
import { ICustomWorld } from '../common/custom-world';

let loginPage: LoginPage;
Given('User access the system', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page!);
  await loginPage.goToPage('/auth/login');
});

When('User enters the email and password', async function (this: ICustomWorld) {
  await loginPage.login(envConfig.email, envConfig.password);
});

Then(
  'It should be redirected to homepage',
  async function (this: ICustomWorld) {
    await expect(this.page!).toHaveTitle(
      pageLocator.LOGIN_PAGE_HOME_PAGE_TITLE
    );
  }
);
