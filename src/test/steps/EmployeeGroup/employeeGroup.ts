import { Before, Given, Then, When } from '@cucumber/cucumber';
import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/custom-world';
import pageLocator from '../../locators/EMPLOYEE_GROUP_PAGE.json';
import { EmployeeGroupPage } from '../../pages/EmployeeGroupPage';
type TypeKeyLocator = keyof typeof pageLocator;

let employeeGroupPage: EmployeeGroupPage;
let fakeId: string;
Before(function (this: ICustomWorld) {
  employeeGroupPage = new EmployeeGroupPage(this.page!);
  fakeId = faker.string.uuid();
});

Given('User redirects to employee group page', async function () {
  await employeeGroupPage.goToPage('/employee_groups');
});

When(
  'User types {string} into {string} field',
  async function (this: ICustomWorld, value: string, element: TypeKeyLocator) {
    const el = await this.page!.$(pageLocator[element]);
    await el?.fill(`${value}_${fakeId}`);
  }
);

Then(
  'Can see {string} on {string} field',
  async function (this: ICustomWorld, value: string, element: TypeKeyLocator) {
    const locator = this.page!.locator(pageLocator[element]);
    await expect(locator).toHaveValue(`${value}_${fakeId}`);
  }
);

Then(
  '{string} displays on the first row of data listing',
  async function (this: ICustomWorld, value: string) {
    expect(
      await this.page!.$(
        `//div//table//tbody//tr//td//div[text()=${value}_${fakeId}]`
      )
    );
  }
);
