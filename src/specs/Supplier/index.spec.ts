import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { validateApiResponse } from '../../helper/utils/validation';
import { GET_COMPANY_BANK_ACCOUNTS } from '../CompanyBankAccount/schema';
import {
  POST_PAYMENT_SUPPLIER,
  PUT_PAYMENT_SUPPLIER,
} from '../SupplierPayment/schema';
import {
  GET_SUPPLIER,
  GET_SUPPLIERS,
  POST_SUPPLIER,
  PUT_SUPPLIER,
} from './schema';

let supplierId = '';
let supplierPaymentId = '';
const chargedType = ['RECEIVER', 'PAYER'];
let firstAccount = {
  account_type: 0,
  bank_id: '',
  account_number: '',
  account_name: '',
  bank_branch_id: '',
  id: '',
};
let secondAccount = {
  account_type: 0,
  bank_id: '',
  account_number: '',
  account_name: '',
  bank_branch_id: '',
  id: '',
};

test('Get Company Bank Accounts To Update Payment Supplier', async ({
  request,
}) => {
  const res = await request.get(`company_bank_accounts`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_COMPANY_BANK_ACCOUNTS);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  firstAccount =
    response.results[
      faker.number.int({ min: 0, max: response.results.length - 1 })
    ] ?? {};
  secondAccount =
    response.results[
      faker.number.int({ min: 0, max: response.results.length - 1 })
    ] ?? {};
});

test('Post Create Supplier', async ({ request }) => {
  const res = await request.fetch(`suppliers`, {
    method: 'post',
    data: {
      name: faker.person.fullName(),
      dept_name: faker.person.jobArea(),
      member_name: faker.person.jobTitle(),
      email: faker.internet.email(),
      memo: faker.lorem.paragraph(),
    },
  });
  const response = await res.json();
  const { isValid } = validateApiResponse(response, POST_SUPPLIER);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  supplierId = response?.id;
});

test('Post Create Payment Supplier', async ({ request }) => {
  const res = await request.fetch(`suppliers/${supplierId}/supplier_payments`, {
    method: 'post',
    data: {
      account_type: firstAccount.account_type,
      bank_id: firstAccount.bank_id,
      account_number: firstAccount.account_number,
      account_name: firstAccount.account_name,
      bank_branch_id: firstAccount.bank_branch_id,
      charged_by: 'PAYER',
      company_bank_account_id: firstAccount.id,
      payment_method_type: 0,
      is_main: true,
    },
  });
  const response = await res.json();
  const { isValid } = validateApiResponse(response, POST_PAYMENT_SUPPLIER);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  supplierPaymentId = response?.id;
});

test('PUT Payment Supplier', async ({ request }) => {
  const res = await request.fetch(
    `suppliers/${supplierId}/supplier_payments/${supplierPaymentId}`,
    {
      method: 'PUT',
      data: {
        account_type: secondAccount.account_type,
        bank_id: secondAccount.bank_id,
        account_number: secondAccount.account_number,
        account_name: secondAccount.account_name,
        bank_branch_id: secondAccount.bank_branch_id,
        charged_by: chargedType[faker.number.int({ min: 0, max: 1 })],
        company_bank_account_id: secondAccount.id,
        payment_method_type: 0,
        is_main: true,
      },
    }
  );
  const response = await res.json();

  const { isValid } = validateApiResponse(response, PUT_PAYMENT_SUPPLIER);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

test('Get List Suppliers', async ({ request }) => {
  const res = await request.get(`suppliers`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_SUPPLIERS);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

test('Get Supplier Detail', async ({ request }) => {
  const res = await request.get(`suppliers/${supplierId}`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_SUPPLIER);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

test('PUT Supplier', async ({ request }) => {
  const res = await request.fetch(`suppliers/${supplierId}`, {
    method: 'PUT',
    data: {
      code: faker.vehicle.vin(),
      name: faker.person.fullName(),
      dept_name: faker.person.jobArea(),
      member_name: faker.person.jobTitle(),
      email: faker.internet.email(),
      memo: faker.lorem.paragraph(),
    },
  });
  const response = await res.json();

  const { isValid } = validateApiResponse(response, PUT_SUPPLIER);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
