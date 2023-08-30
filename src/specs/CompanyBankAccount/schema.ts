export const GET_COMPANY_BANK_ACCOUNTS = {
  type: 'object',
  properties: {
    links: {
      type: 'object',
      properties: {
        next: { type: ['null', 'string'] },
        previous: { type: ['null', 'string'] },
      },
      required: ['next', 'previous'],
      additionalProperties: false,
    },
    count: { type: 'number' },
    page_number: { type: 'number' },
    total_pages: { type: 'number' },
    results: {
      type: 'array',
      minItems: 0,
      maxItems: 50,
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          bank_id: { type: 'string' },
          account_type: { type: 'number' },
          account_number: { type: 'string' },
          account_name: { type: 'string' },
          consigner_code: { type: ['string', 'null'] },
          bank_branch_id: { type: 'string' },
          is_main: { type: 'boolean' },
        },
        required: [
          'id',
          'bank_id',
          'account_type',
          'account_number',
          'account_name',
          'consigner_code',
          'bank_branch_id',
          'is_main',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['links', 'count', 'page_number', 'total_pages', 'results'],
  additionalProperties: false,
};

export const POST_COMPANY_BANK_ACCOUNT = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    bank_id: { type: 'string' },
    account_type: { type: 'number' },
    account_number: { type: 'string' },
    account_name: { type: 'string' },
    consigner_code: { type: 'string' },
    bank_branch_id: { type: 'string' },
    is_main: { type: 'boolean' },
  },
  required: [
    'id',
    'bank_id',
    'account_type',
    'account_number',
    'account_name',
    'consigner_code',
    'bank_branch_id',
    'is_main',
  ],
  additionalProperties: false,
};

export const GET_COMPANY_BANK_ACCOUNT = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    bank_id: { type: 'string' },
    account_type: { type: 'number' },
    account_number: { type: 'string' },
    account_name: { type: 'string' },
    consigner_code: { type: ['string', 'null'] },
    bank_branch_id: { type: 'string' },
    is_main: { type: 'boolean' },
  },
  required: [
    'id',
    'bank_id',
    'account_type',
    'account_number',
    'account_name',
    'consigner_code',
    'bank_branch_id',
    'is_main',
  ],
  additionalProperties: false,
};

export const PUT_COMPANY_BANK_ACCOUNT = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    bank_id: { type: 'string' },
    account_type: { type: 'number' },
    account_number: { type: 'string' },
    account_name: { type: 'string' },
    consigner_code: { type: 'string' },
    bank_branch_id: { type: 'string' },
    is_main: { type: 'boolean' },
  },
  required: [
    'id',
    'bank_id',
    'account_type',
    'account_number',
    'account_name',
    'consigner_code',
    'bank_branch_id',
    'is_main',
  ],
  additionalProperties: false,
};
