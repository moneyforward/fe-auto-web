import { Before, Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import pageLocator from '../../locators/LOGIN_PAGE.json';
import { LoginPage } from '../../pages/LoginPage';
import { envConfig } from '../../support/config';

let loginPage: LoginPage;
Before(function () {
  loginPage = new LoginPage(this.page!);
});

Given('User access the system', async function () {
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

Then('It should be redirected to homepage', async function () {
  await this.page!.waitForLoadState();
  await expect(this.page!).toHaveTitle(pageLocator.LOGIN_PAGE_HOME_PAGE_TITLE);
});
