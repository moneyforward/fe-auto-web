import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import pageLocator from '../../locators';
import { fixture } from '../../support/fixture';

type TypeKeyLocator = keyof typeof pageLocator;

Then(
  'Can see {string} with at least {int} item',
  async function (element: TypeKeyLocator, num: number) {
    await fixture.page.locator(pageLocator[element]).first().waitFor();
    expect(
      await fixture.page.locator(pageLocator[element]).count()
    ).toBeGreaterThanOrEqual(num);
  }
);

Then(
  'Can see {string}, and it is {string}',
  async function (element: TypeKeyLocator, toggle: boolean) {
    if (toggle) {
      await expect(fixture.page.locator(pageLocator[element])).toBeEnabled();
    } else {
      await expect(fixture.page.locator(pageLocator[element])).toBeDisabled();
    }
  }
);

Then('Can see {string}', async function (element: TypeKeyLocator) {
  await fixture.page.locator(pageLocator[element]).first().waitFor();
  await expect(fixture.page.locator(pageLocator[element])).toBeVisible();
});

Then(
  '{string} should be defined and not displays on the DOM',
  async function (element: TypeKeyLocator) {
    expect(fixture.page.locator(pageLocator[element])).toBeDefined();
  }
);
