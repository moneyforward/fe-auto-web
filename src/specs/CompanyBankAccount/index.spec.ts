import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { validateApiResponse } from '../../helper/utils/validation';
import {
  GET_COMPANY_BANK_ACCOUNT,
  GET_COMPANY_BANK_ACCOUNTS,
  POST_COMPANY_BANK_ACCOUNT,
  PUT_COMPANY_BANK_ACCOUNT,
} from './schema';

let companyBankAccount = '';
const bankId = 'f5cba219-4b78-4645-ac60-9dd59d5429f1';
const bankBranchId = '1d7bd5a7-9888-4fce-a01b-44bf577f1142';

test('Post Update Company Bank Account', async ({ request }) => {
  const res = await request.fetch(`company_bank_accounts`, {
    method: 'post',
    data: {
      bank_id: bankId,
      bank_branch_id: bankBranchId,
      account_type: faker.number.int({ min: 0, max: 3 }),
      account_number: faker.string.numeric(7), // always 7 digits
      account_name: 'ﾐｽﾞﾎ',
      consigner_code: faker.string.numeric(10), // always 10 digits
      is_main: faker.datatype.boolean(),
    },
  });
  const response = await res.json();
  const { isValid } = validateApiResponse(response, POST_COMPANY_BANK_ACCOUNT);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

test('Get List Company Bank Accounts', async ({ request }) => {
  const res = await request.get(`company_bank_accounts`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_COMPANY_BANK_ACCOUNTS);
  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
  companyBankAccount =
    response.results[
      faker.number.int({ min: 0, max: response.results.length - 1 })
    ]?.id;
});

test('Get Company Bank Account Detail', async ({ request }) => {
  const res = await request.get(`company_bank_accounts/${companyBankAccount}}`);
  const response = await res.json();

  const { isValid } = validateApiResponse(response, GET_COMPANY_BANK_ACCOUNT);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});

test('Put Company Bank Account', async ({ request }) => {
  const res = await request.fetch(
    `company_bank_accounts/${companyBankAccount}}`,
    {
      method: 'put',
      data: {
        bank_id: bankId,
        bank_branch_id: bankBranchId,
        account_type: faker.number.int({ min: 0, max: 3 }),
        account_number: faker.string.numeric(7), // always 7 digits
        account_name: 'ﾐｽﾞﾎ',
        consigner_code: faker.string.numeric(10), // always 10 digits
        is_main: true, // always true
      },
    }
  );
  const response = await res.json();

  const { isValid } = validateApiResponse(response, PUT_COMPANY_BANK_ACCOUNT);

  expect(isValid).toBeTruthy();
  expect(res.ok()).toBeTruthy();
});
