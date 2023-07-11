import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/custom-world';
import pageLocator from '../../locators';

type TypeKeyLocator = keyof typeof pageLocator;

Then(
  'Can see {string} with at least {int} item',
  async function (this: ICustomWorld, element: TypeKeyLocator, num: number) {
    await this.page!.locator(pageLocator[element]).first().waitFor();
    expect(
      await this.page!.locator(pageLocator[element]).count()
    ).toBeGreaterThanOrEqual(num);
  }
);

Then(
  'Can see {string}, and it is {string}',
  async function (
    this: ICustomWorld,
    element: TypeKeyLocator,
    toggle: boolean
  ) {
    if (toggle) {
      await expect(this.page!.locator(pageLocator[element])).toBeEnabled();
    } else {
      await expect(this.page!.locator(pageLocator[element])).toBeDisabled();
    }
  }
);

Then(
  'Can see {string}',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    await this.page!.locator(pageLocator[element]).first().waitFor();
    await expect(this.page!.locator(pageLocator[element])).toBeVisible();
  }
);

Then(
  '{string} should be defined and not displays on the DOM',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    expect(this.page!.locator(pageLocator[element])).toBeDefined();
  }
);

Then(
  'Can see tooltip {string} when hovering on delete button with text {string}',
  async function (
    this: ICustomWorld,
    tooltip: TypeKeyLocator,
    element: TypeKeyLocator
  ) {
    const deleteButton = await this.page!.$(pageLocator[element]);
    await deleteButton!.hover();

    expect(this.page!.locator(pageLocator[tooltip])).toBeDefined();
  }
);

When(
  'User clicks on {string}',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    const el = this.page!.locator(pageLocator[element]);
    await el.click();
  }
);

When(
  'User types {string} into {string}',
  async function (this: ICustomWorld, value: string, element: TypeKeyLocator) {
    const el = await this.page!.$(pageLocator[element]);
    await el?.fill(value);
  }
);
