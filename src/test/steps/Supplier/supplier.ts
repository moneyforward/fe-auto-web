import { Before, Then, When } from '@cucumber/cucumber';
import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/custom-world';
import pageLocator from '../../locators/SUPPLIER_PAGE.json';

type TypeKeyLocator = keyof typeof pageLocator;
let fakeId: string;

Before(function (this: ICustomWorld) {
  fakeId = faker.string.uuid();
});

When(
  'User types {string} {string} into {string} field in supplier page',
  async function (
    this: ICustomWorld,
    mode: string,
    value: string,
    element: TypeKeyLocator
  ) {
    const isRandom = mode === 'randomly';
    const el = await this.page!.$(pageLocator[element]);
    await el?.fill(isRandom ? `${value}_${fakeId}` : value);
  }
);

Then(
  'Can see {string} {string} on {string} field in supplier page',
  async function (
    this: ICustomWorld,
    mode: string,
    value: string,
    element: TypeKeyLocator
  ) {
    const isRandom = mode === 'randomly';
    const locator = this.page!.locator(pageLocator[element]);
    await expect(locator).toHaveValue(isRandom ? `${value}_${fakeId}` : value);
  }
);

Then(
  '{string} displays {string} on the first row of supplier listing',
  async function (this: ICustomWorld, value: string, mode: string) {
    const isRandom = mode === 'randomly';

    expect(
      await this.page!.$(
        `//div//table//tbody//tr//td//div[text()=${
          isRandom ? value + '_' + fakeId : value
        }]`
      )
    );
  }
);

When(
  'User clicks on the first item on the supplier listing',
  async function (this: ICustomWorld) {
    const el = this.page!.locator(`//div//table//tbody//tr[position()=1]`);
    await el.click();
    await this.page!.waitForTimeout(1000);
  }
);
