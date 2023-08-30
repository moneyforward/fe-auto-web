import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { validateApiResponse } from '../../helper/utils/validation';
import { GET_PAYMENT_SUPPLIER, GET_PAYMENT_SUPPLIERS } from './schema';

let supplierId = '226d1bce-f3e2-4a2d-bda6-5dd59e5ea330';
let supplierPaymentId = '';

test('Get List Suppliers Payment', async ({ request }) => {
  const res = await request.get(`suppliers/${supplierId}/supplier_payments`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_PAYMENT_SUPPLIERS);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  supplierPaymentId =
    response?.results[
      faker.number.int({ min: 0, max: response.results.length - 1 })
    ]?.id;
});

test('Get Supplier Payment Detail', async ({ request }) => {
  const res = await request.get(
    `suppliers/${supplierId}/supplier_payments/${supplierPaymentId}`
  );
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_PAYMENT_SUPPLIER);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
