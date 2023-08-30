export const GET_EMPLOYEES = {
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
      minItems: 0,
      maxItems: 50,
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          display_name: { type: 'string' },
        },
        required: ['id', 'display_name'],
        additionalProperties: false,
      },
    },
  },
  required: ['links', 'count', 'page_number', 'total_pages', 'results'],
  additionalProperties: false,
};

export const GET_EMPLOYEE = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    display_name: { type: 'string' },
  },
  required: ['id', 'display_name'],
  additionalProperties: false,
};
