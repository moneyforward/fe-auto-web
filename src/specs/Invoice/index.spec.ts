import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import fs from 'fs';
import { validateApiResponse } from '../../helper/utils/validation';
import {
  GET_INVOICE,
  GET_INVOICES,
  GET_INVOICE_UPLOAD_EVENTS,
  POST_INVOICE,
  PUT_INVOICE,
} from './schema';

let invoiceId = '';
let invoiceIdFromEventId = '';
let eventId = '';

test('Post Upload Invoice', async ({ request }) => {
  const file = fs.createReadStream('src/assets/invoice.jpg');
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
  eventId = response.invoice_upload_event_ids[0];
});

test('Get List Invoices', async ({ request }) => {
  const res = await request.get(`invoices`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_INVOICES);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  invoiceId =
    response.results[
      faker.number.int({ min: 0, max: response.results.length - 1 })
    ]?.id;
});

test('Get Invoice Detail', async ({ request }) => {
  const res = await request.get(`invoices/${invoiceId}}`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_INVOICE);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

test('Get Upload Event By Id', async ({ request }, testInfo) => {
  do {
    const res = await request.get(`invoice_upload_events/${eventId}`);
    const response = await res.json();
    const { isValid } = validateApiResponse(
      response,
      GET_INVOICE_UPLOAD_EVENTS
    );

    expect(isValid).toBeTruthy();
    expect(res.ok()).toBeTruthy();
    invoiceIdFromEventId = response.invoice_id;
  } while (!invoiceIdFromEventId && testInfo.retry < 10);
});

test('Put Update Invoice', async ({ request }) => {
  const res = await request.fetch(`invoices/${invoiceIdFromEventId}}`, {
    method: 'put',
    data: {
      supplier_id: null,
      supplier_payment_id: null,
      invoice_no: null,
      transacted_on: '2023-10-31',
      payment_scheduled_on: null,
      transfer_fee: 0,
      tax_withholding: 0,
      adjustment: 0,
      invoice_excise_amounts: [
        {
          tax_rate: 10,
          tax_excluded_amount: 1000,
          tax_amount: 1000,
          tax_class_name: 'NORMAL_10',
        },
        {
          tax_rate: 8,
          tax_excluded_amount: 0,
          tax_amount: -1000,
          tax_class_name: 'NORMAL_8',
        },
        {
          tax_rate: 0,
          tax_excluded_amount: 1000,
          tax_amount: 1000,
          tax_class_name: 'NOT_APPLICABLE',
        },
        {
          tax_rate: 8,
          tax_excluded_amount: -1000,
          tax_amount: -1000,
          tax_class_name: 'REDUCTION_8',
        },
      ],
    },
  });
  const response = await res.json();

  const { isValid } = validateApiResponse(response, PUT_INVOICE);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
