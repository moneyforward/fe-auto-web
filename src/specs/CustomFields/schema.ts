export const GET_CUSTOM_FIELDS = {
  type: 'object',
  properties: {
    links: {
      type: 'object',
      properties: {
        next: { type: ['null', 'string'] },
        previous: { type: ['null', 'string'] },
      },
      required: ['next', 'previous'],
    },
    count: { type: 'number' },
    page_number: { type: 'number' },
    total_pages: { type: 'number' },
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          code: { type: ['null', 'string'] },
          name: { type: 'string' },
          memo: { type: ['null', 'string'] },
          input_type: { type: 'number' },
          input_format: { type: 'number' },
          input_min_length: { type: 'number' },
          input_max_length: { type: 'number' },
        },
      },
      required: [
        'id',
        'code',
        'name',
        'memo',
        'input_type',
        'input_format',
        'input_max_length',
        'input_min_length',
      ],
      additionalProperties: false,
    },
  },
  required: ['links', 'count', 'page_number', 'total_pages', 'results'],
  additionalProperties: false,
};

export const POST_CUSTOM_FIELDS = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    code: { type: ['null', 'string'] },
    name: { type: 'string' },
    memo: { type: ['null', 'string'] },
    input_type: { type: 'number' },
    input_format: { type: 'number' },
    input_min_length: { type: 'number' },
    input_max_length: { type: 'number' },
  },
  required: [
    'id',
    'code',
    'name',
    'memo',
    'input_type',
    'input_format',
    'input_max_length',
    'input_min_length',
  ],
  additionalProperties: false,
};

export const PUT_CUSTOM_FIELDS = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    code: { type: ['null', 'string'] },
    name: { type: 'string' },
    memo: { type: ['null', 'string'] },
    input_type: { type: 'number' },
    input_format: { type: 'number' },
    input_min_length: { type: 'number' },
    input_max_length: { type: 'number' },
  },
  required: [
    'id',
    'code',
    'name',
    'memo',
    'input_type',
    'input_format',
    'input_max_length',
    'input_min_length',
  ],
  additionalProperties: false,
};
