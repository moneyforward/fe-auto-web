import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import pageLocator from '../../selectors/SUPPLIER_PAGE.json';
import { ICustomWorld } from './custom-world';

type TypeKeyLocator = keyof typeof pageLocator;

Then(
  'Can see {string}',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    expect(this.page!.locator(pageLocator[element])).toBeDefined();
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
