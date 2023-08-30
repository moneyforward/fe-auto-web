export const GET_INVOICES = {
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
    count: {
      type: 'number',
    },
    page_number: {
      type: 'number',
    },
    total_pages: {
      type: 'number',
    },
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          supplier_id: { type: ['null', 'string'] },
          supplier_payment_id: { type: ['null', 'string'] },
          processing_status: {
            type: 'string',
          },
          invoice_no: { type: ['null', 'string'] },
          payment_scheduled_on: { type: ['null', 'string'] },
          transacted_on: {
            type: ['null', 'string'],
          },
          tax_withholding: {
            type: ['number', 'null'],
          },
          adjustment: {
            type: 'number',
          },
          transfer_fee: {
            type: 'number',
          },
          total: {
            type: 'number',
          },
          invoice_excise_amounts: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                tax_rate: {
                  type: 'number',
                },
                tax_excluded_amount: {
                  type: 'number',
                },
                tax_amount: {
                  type: 'number',
                },
                tax_class_name: {
                  type: 'string',
                },
              },
              required: [
                'tax_rate',
                'tax_excluded_amount',
                'tax_amount',
                'tax_class_name',
              ],
            },
          },
          upload_event_type: {
            type: 'string',
          },
          invoice_custom_fields: {
            type: 'array',
            items: {},
          },
          invoice_upload_event_id: {
            type: 'string',
          },
        },
        required: [
          'id',
          'supplier_id',
          'supplier_payment_id',
          'processing_status',
          'invoice_no',
          'payment_scheduled_on',
          'transacted_on',
          'tax_withholding',
          'adjustment',
          'transfer_fee',
          'total',
          'invoice_excise_amounts',
          'upload_event_type',
          'invoice_custom_fields',
          'invoice_upload_event_id',
        ],
      },
    },
  },
  required: ['links', 'count', 'page_number', 'total_pages', 'results'],
};

export const POST_INVOICE = {
  type: 'object',
  properties: {
    invoice_upload_event_ids: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['invoice_upload_event_ids'],
};

export const GET_INVOICE = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    supplier_id: { type: ['string', 'null'] },
    supplier_payment_id: { type: ['string', 'null'] },
    processing_status: { type: 'string' },
    invoice_no: { type: ['string', 'null'] },
    payment_scheduled_on: { type: ['string', 'null'] },
    transacted_on: { type: ['string', 'null'] },
    tax_withholding: { type: ['number', 'null'] },
    adjustment: { type: ['number', 'null'] },
    transfer_fee: { type: ['number', 'null'] },
    total: { type: ['number', 'null'] },
    invoice_upload_event_id: { type: 'string' },
    invoice_custom_fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          value: { type: 'string' },
        },
      },
    },
    invoice_excise_amounts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          tax_rate: { type: 'number' },
          tax_excluded_amount: { type: 'number' },
          tax_amount: { type: 'number' },
          tax_class_name: { type: 'string' },
        },
        required: [
          'tax_rate',
          'tax_excluded_amount',
          'tax_amount',
          'tax_class_name',
        ],
        additionalProperties: false,
      },
    },
    upload_event_type: { type: 'string' },
  },
  required: [
    'id',
    'supplier_id',
    'supplier_payment_id',
    'processing_status',
    'invoice_no',
    'payment_scheduled_on',
    'transacted_on',
    'tax_withholding',
    'adjustment',
    'transfer_fee',
    'total',
    'invoice_excise_amounts',
  ],
  additionalProperties: false,
};

export const PUT_INVOICE = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    supplier_id: { type: ['string', 'null'] },
    supplier_payment_id: { type: ['string', 'null'] },
    processing_status: { type: 'string' },
    invoice_no: { type: ['string', 'null'] },
    payment_scheduled_on: { type: ['string', 'null'] },
    transacted_on: { type: ['string', 'null'] },
    tax_withholding: { type: ['number', 'null'] },
    adjustment: { type: ['number', 'null'] },
    transfer_fee: { type: ['number', 'null'] },
    total: { type: ['number', 'null'] },
    invoice_excise_amounts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          tax_rate: { type: 'number' },
          tax_excluded_amount: { type: 'number' },
          tax_amount: { type: 'number' },
          tax_class_name: { type: 'string' },
        },
        required: [
          'tax_rate',
          'tax_excluded_amount',
          'tax_amount',
          'tax_class_name',
        ],
        additionalProperties: false,
      },
    },
    invoice_upload_event_id: { type: 'string' },
    upload_event_type: { type: 'string' },
    invoice_custom_fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          value: { type: 'string' },
        },
      },
    },
  },
  required: [
    'id',
    'supplier_id',
    'supplier_payment_id',
    'processing_status',
    'invoice_no',
    'payment_scheduled_on',
    'transacted_on',
    'tax_withholding',
    'adjustment',
    'transfer_fee',
    'total',
    'invoice_excise_amounts',
  ],
  additionalProperties: false,
};

export const GET_INVOICE_UPLOAD_EVENTS = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    invoice_id: {
      type: ['null', 'string'],
    },
    upload_event_type: {
      type: 'string',
    },
    processing_status: {
      type: ['null', 'string'],
    },
    uploaded_at: {
      type: ['null', 'string'],
    },
    mime_type: {
      type: ['null', 'string'],
    },
    require_input_type: {
      type: 'number',
    },
  },
  required: [
    'id',
    'invoice_id',
    'upload_event_type',
    'processing_status',
    'uploaded_at',
    'mime_type',
    'require_input_type',
  ],
  additionalProperties: false,
};
