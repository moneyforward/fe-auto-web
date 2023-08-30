import { expect, test } from '@playwright/test';
import { validateApiResponse } from '../../helper/utils/validation';
import { GET_BANKS_BRANCH } from './schema';

const bankId = '1bc11f04-6a9d-4f0a-aa82-50f8cb897f86';

test('Get Banks Branch', async ({ request }) => {
  const res = await request.get(`banks/${bankId}/branches?page=1`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_BANKS_BRANCH);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
