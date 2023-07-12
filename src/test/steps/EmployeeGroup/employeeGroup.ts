import { Before, Then, When } from '@cucumber/cucumber';
import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/custom-world';
import pageLocator from '../../locators/EMPLOYEE_GROUP_PAGE.json';
type TypeKeyLocator = keyof typeof pageLocator;

let fakeId: string;
Before(function (this: ICustomWorld) {
  fakeId = faker.string.uuid();
});

When(
  'User types {string} into {string} field',
  async function (this: ICustomWorld, value: string, element: TypeKeyLocator) {
    const el = await this.page!.$(pageLocator[element]);
    await el?.fill(`${value}_${fakeId}`);
  }
);

Then(
  'Can see {string} on {string} field in employee group page',
  async function (this: ICustomWorld, value: string, element: TypeKeyLocator) {
    const locator = this.page!.locator(pageLocator[element]);
    await expect(locator).toHaveValue(`${value}_${fakeId}`);
  }
);

Then(
  '{string} displays on the first row of employee group listing',
  async function (this: ICustomWorld, value: string) {
    expect(
      await this.page!.$(
        `//div//table//tbody//tr//td//div[text()=${value}_${fakeId}]`
      )
    );
  }
);
