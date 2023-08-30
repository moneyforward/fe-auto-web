export const GET_SUPPLIERS = {
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
          code: { type: ['null', 'string'] },
          name: { type: 'string' },
          dept_name: { type: ['null', 'string'] },
          member_name: { type: ['null', 'string'] },
          email: { type: ['null', 'string'] },
          memo: { type: ['null', 'string'] },
          id: { type: ['null', 'string'] },
          main_payment: { type: ['null', 'string'] },
        },
        required: [
          'code',
          'name',
          'dept_name',
          'member_name',
          'email',
          'memo',
          'id',
          'main_payment',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['links', 'count', 'page_number', 'total_pages'],
  additionalProperties: false,
};

export const POST_SUPPLIER = {
  type: 'object',
  properties: {
    code: { type: ['null', 'string'] },
    name: { type: 'string' },
    dept_name: { type: ['null', 'string'] },
    member_name: { type: ['null', 'string'] },
    email: { type: ['null', 'string'] },
    memo: { type: ['null', 'string'] },
    id: { type: ['null', 'string'] },
    main_payment: { type: ['null', 'string'] },
  },
  required: [
    'code',
    'name',
    'dept_name',
    'member_name',
    'email',
    'memo',
    'main_payment',
  ],
  additionalProperties: false,
};

export const GET_SUPPLIER = {
  type: 'object',
  properties: {
    code: { type: ['null', 'string'] },
    name: { type: 'string' },
    dept_name: { type: ['null', 'string'] },
    member_name: { type: ['null', 'string'] },
    email: { type: ['null', 'string'] },
    memo: { type: ['null', 'string'] },
    id: { type: ['null', 'string'] },
    main_payment: { type: ['null', 'string'] },
  },
  required: [
    'code',
    'name',
    'dept_name',
    'member_name',
    'email',
    'memo',
    'main_payment',
  ],
  additionalProperties: false,
};

export const PUT_SUPPLIER = {
  type: 'object',
  properties: {
    code: { type: ['null', 'string'] },
    name: { type: 'string' },
    dept_name: { type: ['null', 'string'] },
    member_name: { type: ['null', 'string'] },
    email: { type: ['null', 'string'] },
    memo: { type: ['null', 'string'] },
    id: { type: ['null', 'string'] },
    main_payment: { type: ['null', 'string'] },
  },
  required: [
    'code',
    'name',
    'dept_name',
    'member_name',
    'email',
    'memo',
    'main_payment',
  ],
  additionalProperties: false,
};
