import { Before, Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { envConfig } from '../../../support/config';
import { ICustomWorld } from '../../../support/custom-world';
import pageLocator from '../../locators/LOGIN_PAGE.json';
import { LoginPage } from '../../pages/LoginPage';

let loginPage: LoginPage;
Before(function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page!);
});

Given('User access the system', async function (this: ICustomWorld) {
  await loginPage.goToPage();
  await expect(this.page!).toHaveTitle(pageLocator.LOGIN_PAGE_TITLE);
});

When(
  'User enters the email as {string} and password as {string}',
  async function (email: string, password: string) {
    await loginPage.login(
      email || envConfig.email,
      password || envConfig.password
    );
  }
);

Then(
  'It should be redirected to homepage',
  async function (this: ICustomWorld) {
    await this.page!.waitForLoadState();
    await expect(this.page!).toHaveTitle(
      pageLocator.LOGIN_PAGE_HOME_PAGE_TITLE
    );
  }
);
