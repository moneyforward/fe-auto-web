import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { validateApiResponse } from '../../helper/utils/validation';
import { GET_CUSTOM_FIELDS, PUT_CUSTOM_FIELDS } from './schema';

let currentCustomFieldId = '';

test('Get List Custom Fields', async ({ request }) => {
  const res = await request.get(`custom_fields`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_CUSTOM_FIELDS);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  currentCustomFieldId =
    response.results[
      faker.number.int({ min: 0, max: response.results.length - 1 })
    ].id;
});

// Maximum items are 20
// test('POST Custom Fields', async ({ request }) => {
//   const res = await request.fetch(`custom_fields`, {
//     method: 'POST',
//     data: {
//       code: faker.vehicle.vin(),
//       name: faker.vehicle.bicycle(),
//       memo: faker.vehicle.vehicle(),
//       input_format: 0,
//       input_type: 0,
//       input_max_length: 100,
//     },
//   });
//   const response = await res.json();

//   const { isValid } = validateApiResponse(response, POST_CUSTOM_FIELDS);
//   expect(isValid).toBeTruthy();
//   expect(res.ok()).toBeTruthy();
// });

test('PUT Custom Fields', async ({ request }) => {
  const timeStamp = new Date().getTime();
  const data = {
    code: faker.vehicle.vin(),
    name: timeStamp + faker.vehicle.bicycle(),
    memo: faker.vehicle.vehicle(),
    input_type: 0,
    input_format: 0,
  };
  const res = await request.fetch(`custom_fields/${currentCustomFieldId}`, {
    method: 'PUT',
    data,
  });
  const response = await res.json();
  const { isValid } = validateApiResponse(response, PUT_CUSTOM_FIELDS);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
