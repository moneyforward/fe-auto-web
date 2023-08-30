import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { validateApiResponse } from '../../helper/utils/validation';
import { GET_EMPLOYEE, GET_EMPLOYEES } from './schema';

let employeeId = '';
test('Get List Employees', async ({ request }) => {
  const res = await request.get(`employees`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_EMPLOYEES);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  employeeId =
    response.results[
      faker.number.int({ min: 0, max: response.results.length - 1 })
    ]?.id;
});

test('Get Employee Detail', async ({ request }) => {
  const res = await request.get(`employees/${employeeId}`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_EMPLOYEE);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
