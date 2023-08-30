import { expect, test } from '@playwright/test';
import fs from 'fs';
import { validateApiResponse } from '../../helper/utils/validation';
import { GET_INVOICE, GET_INVOICES, POST_INVOICE } from './schema';

let invoiceId = '';

test('Post Upload Invoice', async ({ request }) => {
  const file = fs.createReadStream('src/assets/invoice_1.jpg');
  const res = await request.fetch(`invoices/upload_invoice`, {
    method: 'post',
    multipart: {
      invoice_files: file,
    },
  });
  const response = await res.json();
  const { isValid } = validateApiResponse(response, POST_INVOICE);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

test('Get List Invoices', async ({ request }) => {
  const res = await request.get(`invoices`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_INVOICES);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  invoiceId = response.results[0]?.id;
});

test('Get Invoice Detail', async ({ request }) => {
  const res = await request.get(`invoices/${invoiceId}}`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_INVOICE);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

// test('Put Update Invoice', async ({ request }) => {
//   const res = await request.fetch(`invoices/${invoiceId}}`, {
//     method: 'put',
//     headers: {
//       Accept: 'application/json',
//     },
//     data: {
//       supplier_id: null,
//       supplier_payment_id: null,
//       processing_status: 'PENDING',
//       invoice_no: null,
//       payment_scheduled_on: null,
//       transacted_on: '2023-10-31',
//       tax_withholding: 0,
//       adjustment: 0,
//       transfer_fee: 0,
//       total: 0,
//       invoice_excise_amounts: [
//         {
//           tax_rate: 10,
//           tax_excluded_amount: 1000,
//           tax_amount: 1000,
//           tax_class_name: 'NORMAL_10',
//         },
//         {
//           tax_rate: 8,
//           tax_excluded_amount: 0,
//           tax_amount: -1000,
//           tax_class_name: 'NORMAL_8',
//         },
//         {
//           tax_rate: 0,
//           tax_excluded_amount: 1000,
//           tax_amount: 1000,
//           tax_class_name: 'NOT_APPLICABLE',
//         },
//         {
//           tax_rate: 8,
//           tax_excluded_amount: -1000,
//           tax_amount: -1000,
//           tax_class_name: 'REDUCTION_8',
//         },
//       ],
//       upload_event_type: 'UPLOAD',
//       invoice_custom_fields: [
//         {
//           id: 'f2729bc8-78b0-4a1a-91c4-ee6874f3db50',
//           name: 'CF Test 01',
//           value: 'CF001',
//         },
//       ],
//       invoice_upload_event_id: '7c4ee953-030d-4e08-b1c8-25e63b3f1fca',
//     },
//   });
//   const response = await res.json();

//   const { isValid } = validateApiResponse(response, PUT_INVOICE);

//   expect(isValid).toBeTruthy();
//   expect(res.ok()).toBeTruthy();
// });

test('Get Upload Event by ID', async ({ request }) => {
  const res = await request.get(`invoices/${invoiceId}`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_INVOICE);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
