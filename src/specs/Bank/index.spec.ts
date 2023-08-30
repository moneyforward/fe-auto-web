import { expect, test } from '@playwright/test';
import { validateApiResponse } from '../../helper/utils/validation';
import { GET_BANKS } from './schema';

test('Get Banks', async ({ request }) => {
  const res = await request.get(`banks`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_BANKS);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
