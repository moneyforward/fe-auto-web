export const GET_BANKS = {
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
          name: { type: 'string' },
          name_kana: { type: 'string' },
          code: { type: 'string' },
          id: { type: 'string' },
        },
        required: ['name', 'name_kana', 'code', 'id'],
        additionalProperties: false,
      },
    },
  },
  required: ['links', 'count', 'page_number', 'total_pages', 'results'],
  additionalProperties: false,
};
