import faker from 'faker';
import { map, pipe, range } from 'ramda';

export async function init() {
  return SDK;
}

export const SDK = {
  client: {},
  form: {
    readOnly: false,
    onReadOnlyChange() {},
  },
  frame: {
    startAutoResizer() {},
    stopAutoResizer() {},
    setHeight() {},
  },
  field: {
    async getValue() {
      return faker.random.word(1, 20);
    },
    async setValue() {},
    schema: {
      items: {
        allOf: [
          {
            $ref: 'http://bigcontent.io/cms/schema/v1/core#/definitions/content-link',
          },
          {
            properties: {
              contentType: {
                enum: ['http://test.com'],
              },
            },
          },
        ],
      },
      minItems: 1,
      maxItems: 5,
    },
  },
  params: {
    instance: {
      nodeId: faker.random.uuid(),
    },
  },
};
