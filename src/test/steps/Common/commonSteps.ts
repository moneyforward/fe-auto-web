import { Before, Given, Then, When } from '@cucumber/cucumber';
import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/custom-world';
import pageLocator from '../../locators';
import WrapperPage from '../../pages/WrapperPage';

type TypeKeyLocator = keyof typeof pageLocator;
let pageWrapper: WrapperPage;

Before(function (this: ICustomWorld) {
  pageWrapper = new WrapperPage(this.page!);
});

Given(
  'User redirects to {string}',
  async function (this: ICustomWorld, pageName: string) {
    pageWrapper.goToPage(pageName);
  }
);

Then(
  'Can see {string} with at least {int} item',
  async function (this: ICustomWorld, element: TypeKeyLocator, num: number) {
    await this.page!.locator(pageLocator[element]).first().waitFor();
    expect(
      await this.page!.locator(pageLocator[element]).count()
    ).toBeGreaterThanOrEqual(num);
  }
);

/**
 * toBeDisabled(): Element is disabled if it has "disabled" attribute or is disabled via 'aria-disabled
 */
Then(
  'Can see {string} and it is {string}',
  async function (this: ICustomWorld, element: TypeKeyLocator, toggle: string) {
    await expect(
      this.page!.locator(
        `${pageLocator[element]}[@data-disabled="${
          toggle === 'disabled' ? 'true' : 'false'
        }"]`
      )
    ).toBeVisible();
  }
);

Then(
  'Can see {string} and it contains {string} in class name',
  async function (this: ICustomWorld, element: TypeKeyLocator, toggle: string) {
    await expect(
      this.page!.locator(
        `${pageLocator[element]}[contains(@class, ${
          toggle === 'disabled' ? 'isDisabled' : ''
        })]`
      )
    ).toBeVisible();
  }
);

// display === define (but define !== display)
Then(
  'Can see {string}',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    await this.page!.locator(pageLocator[element]).waitFor();
    await expect(this.page!.locator(pageLocator[element])).toBeVisible();
  }
);

// element is not show on page, but show on DOM
Then(
  '{string} is present',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    expect(this.page!.locator(pageLocator[element])).toBeDefined();
  }
);

// element is not show on DOM == not defined
Then(
  '{string} is not displays',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    await expect(this.page!.locator(pageLocator[element])).not.toBeVisible();
  }
);
Then(
  'Can see tooltip {string} when hovering on {string} element',
  async function (
    this: ICustomWorld,
    tooltip: TypeKeyLocator,
    element: TypeKeyLocator
  ) {
    const el = await this.page!.$(pageLocator[element]);
    await el!.hover();

    expect(this.page!.locator(pageLocator[tooltip])).toBeDefined();
  }
);

When(
  'User clicks on {string} element',
  async function (this: ICustomWorld, element: TypeKeyLocator) {
    const el = this.page!.locator(pageLocator[element]);
    await el.click();
  }
);

When(
  'User types {string} into {string}',
  async function (this: ICustomWorld, value: string, element: TypeKeyLocator) {
    const uuid = faker.string.uuid();
    const el = this.page!.locator(pageLocator[element]);
    await el?.fill(`${value}_${uuid}`);
  }
);
