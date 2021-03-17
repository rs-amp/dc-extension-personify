import { storiesOf } from '@storybook/react';
import React from 'react';
import ManagedCoverageReport from './ManagedCoverageReport';

import { SdkContext } from '../../components';

const contentWithCriteria = {
  _meta: {
    name: 'Targeted Content',
    schema: 'https://anyafinn.online/component-personify-targeted-content.json',
    deliveryId: '59f78b8e-a97e-4920-93ed-f9a672e46ca9',
  },
  groups: [
    {
      criteria: {
        tags: ['diy', 'ethical', 'wfh'],
        behaviors: ['wfh'],
      },
      components: [
        {
          _meta: {
            name: 'FW - Dog Xmas Banner',
            schema:
              'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/simple-banner.json',
            deliveryId: 'd5f7ec38-5a18-4c3a-9f10-1ab69774b582',
          },
          image: {
            img: {
              image: {
                crop: [0, 0, 6250, 3516],
                rot: 0,
                hue: 0,
                sat: 0,
                bri: 0,
                fliph: false,
                flipv: false,
                poi: {
                  x: -1,
                  y: -1,
                },
                aspectLock: '16:9',
                image: {
                  _meta: {
                    schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
                  },
                  id: '58878a6f-5296-4cf8-be8f-a32b181b5450',
                  name: 'dog xmas2',
                  endpoint: 'willow',
                  defaultHost: 'i1.adis.ws',
                },
              },
            },
            component: 'Image',
            _meta: {
              schema:
                'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/di-image.json',
            },
          },
          textPositioning: {
            textPositionVertical: 'middle',
            textPositionHorizontal: 'left',
          },
          bannerText: {
            header: 'Christmas Cheer',
            description: 'Shop our last Holiday Gift Guide',
          },
          ctaSettings: {
            buttonText: 'Shop Now',
            linkUrl: 'www.amplience.com',
          },
        },
      ],
    },
    {
      criteria: {
        tags: ['wfh'],
        behaviors: ['Christmas Gifting'],
      },
      components: [
        {
          _meta: {
            name: 'FW - Cat Xmas Banner',
            schema:
              'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/simple-banner.json',
            deliveryId: 'be4d9930-6c82-4b2f-9c27-b25fef9e3132',
          },
          image: {
            img: {
              image: {
                crop: [0, 0, 0, 0],
                rot: 0,
                hue: 0,
                sat: 0,
                bri: 0,
                fliph: false,
                flipv: false,
                poi: {
                  x: -1,
                  y: -1,
                },
                aspectLock: 'clear',
                image: {
                  _meta: {
                    schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
                  },
                  id: 'a02dc3bb-c704-415e-8dc6-f48115995939',
                  name: 'cat-xmas',
                  endpoint: 'willow',
                  defaultHost: 'i1.adis.ws',
                },
              },
            },
            component: 'Image',
            _meta: {
              schema:
                'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/di-image.json',
            },
          },
          textPositioning: {
            textPositionVertical: 'middle',
            textPositionHorizontal: 'left',
          },
          bannerText: {
            header: 'Holiday Cheer',
            description: 'Shop The Holiday Sale',
          },
          ctaSettings: {
            linkUrl: 'www.amplience.com',
            buttonText: 'Shop Holiday',
          },
        },
      ],
    },
    {
      criteria: {
        behaviors: ['Fashion'],
        tags: ['Sport'],
      },
      components: [
        {
          _meta: {
            name: 'FW - Cat Xmas Banner',
            schema:
              'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/simple-banner.json',
            deliveryId: '071334fa-9411-4f79-8893-f42b22471c89',
          },
          image: {
            img: {
              image: {
                crop: [0, 0, 0, 0],
                rot: 0,
                hue: 0,
                sat: 0,
                bri: 0,
                fliph: false,
                flipv: false,
                poi: {
                  x: -1,
                  y: -1,
                },
                aspectLock: 'clear',
                image: {
                  _meta: {
                    schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
                  },
                  id: '3dc1d6ce-2e2a-433c-a7c8-8c786f577679',
                  name: 'cat-photo4',
                  endpoint: 'willow',
                  defaultHost: 'i1.adis.ws',
                },
              },
            },
            component: 'Image',
            _meta: {
              schema:
                'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/di-image.json',
            },
          },
          textPositioning: {
            textPositionVertical: 'middle',
            textPositionHorizontal: 'left',
          },
          bannerText: {
            header: 'Home Goods Sale',
            description: 'Purrfect For The Whole Family',
          },
          ctaSettings: {
            linkUrl: 'www.amplience.com',
            buttonText: 'Shop Meow',
          },
        },
      ],
    },
  ],
  info: 'ignore',
};
const contentWithoutCriteria = {
  _meta: {
    name: 'Targeted Content',
    schema: 'https://anyafinn.online/component-personify-targeted-content.json',
    deliveryId: '59f78b8e-a97e-4920-93ed-f9a672e46ca9',
  },
  groups: [
    {
      criteria: {
        tags: ['diy', 'ethical', 'wfh'],
        behaviors: ['wfh'],
      },
      components: [
        {
          _meta: {
            name: 'FW - Dog Xmas Banner',
            schema:
              'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/simple-banner.json',
            deliveryId: 'd5f7ec38-5a18-4c3a-9f10-1ab69774b582',
          },
          image: {
            img: {
              image: {
                crop: [0, 0, 6250, 3516],
                rot: 0,
                hue: 0,
                sat: 0,
                bri: 0,
                fliph: false,
                flipv: false,
                poi: {
                  x: -1,
                  y: -1,
                },
                aspectLock: '16:9',
                image: {
                  _meta: {
                    schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
                  },
                  id: '58878a6f-5296-4cf8-be8f-a32b181b5450',
                  name: 'dog xmas2',
                  endpoint: 'willow',
                  defaultHost: 'i1.adis.ws',
                },
              },
            },
            component: 'Image',
            _meta: {
              schema:
                'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/di-image.json',
            },
          },
          textPositioning: {
            textPositionVertical: 'middle',
            textPositionHorizontal: 'left',
          },
          bannerText: {
            header: 'Christmas Cheer',
            description: 'Shop our last Holiday Gift Guide',
          },
          ctaSettings: {
            buttonText: 'Shop Now',
            linkUrl: 'www.amplience.com',
          },
        },
      ],
    },
    {
      criteria: {
        tags: ['wfh'],
        behaviors: ['Christmas Gifting'],
      },
      components: [
        {
          _meta: {
            name: 'FW - Cat Xmas Banner',
            schema:
              'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/simple-banner.json',
            deliveryId: 'be4d9930-6c82-4b2f-9c27-b25fef9e3132',
          },
          image: {
            img: {
              image: {
                crop: [0, 0, 0, 0],
                rot: 0,
                hue: 0,
                sat: 0,
                bri: 0,
                fliph: false,
                flipv: false,
                poi: {
                  x: -1,
                  y: -1,
                },
                aspectLock: 'clear',
                image: {
                  _meta: {
                    schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
                  },
                  id: 'a02dc3bb-c704-415e-8dc6-f48115995939',
                  name: 'cat-xmas',
                  endpoint: 'willow',
                  defaultHost: 'i1.adis.ws',
                },
              },
            },
            component: 'Image',
            _meta: {
              schema:
                'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/di-image.json',
            },
          },
          textPositioning: {
            textPositionVertical: 'middle',
            textPositionHorizontal: 'left',
          },
          bannerText: {
            header: 'Holiday Cheer',
            description: 'Shop The Holiday Sale',
          },
          ctaSettings: {
            linkUrl: 'www.amplience.com',
            buttonText: 'Shop Holiday',
          },
        },
      ],
    },
    {
      components: [
        {
          _meta: {
            name: 'FW - Cat Xmas Banner',
            schema:
              'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/simple-banner.json',
            deliveryId: '071334fa-9411-4f79-8893-f42b22471c89',
          },
          image: {
            img: {
              image: {
                crop: [0, 0, 0, 0],
                rot: 0,
                hue: 0,
                sat: 0,
                bri: 0,
                fliph: false,
                flipv: false,
                poi: {
                  x: -1,
                  y: -1,
                },
                aspectLock: 'clear',
                image: {
                  _meta: {
                    schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
                  },
                  id: '3dc1d6ce-2e2a-433c-a7c8-8c786f577679',
                  name: 'cat-photo4',
                  endpoint: 'willow',
                  defaultHost: 'i1.adis.ws',
                },
              },
            },
            component: 'Image',
            _meta: {
              schema:
                'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/di-image.json',
            },
          },
          textPositioning: {
            textPositionVertical: 'middle',
            textPositionHorizontal: 'left',
          },
          bannerText: {
            header: 'Home Goods Sale',
            description: 'Purrfect For The Whole Family',
          },
          ctaSettings: {
            linkUrl: 'www.amplience.com',
            buttonText: 'Shop Meow',
          },
        },
      ],
    },
  ],
  info: 'ignore',
};
storiesOf('ManagedCoverageReport', module)
  .add('Initial State without form model', () => {
    const sdk = {
      form: {
        getValue: async () => {
          throw new Error('No form model');
        },
      },
      params: {
        installation: {
          apiUrl: 'https://8tk4w9mmw8.execute-api.eu-west-1.amazonaws.com/amplience-dev-uk-info-prod',
        },
      },
    } as any;

    return (
      <SdkContext sdk={sdk}>
        <ManagedCoverageReport />
      </SdkContext>
    );
  })
  .add('Initial State without criteria', () => {
    const sdk = {
      form: {
        getValue: async () => {
          return contentWithoutCriteria;
        },
      },
      params: {
        installation: {
          apiUrl: 'https://8tk4w9mmw8.execute-api.eu-west-1.amazonaws.com/amplience-dev-uk-info-prod',
        },
      },
    } as any;

    return (
      <SdkContext sdk={sdk}>
        <ManagedCoverageReport />
      </SdkContext>
    );
  })
  .add('Initial State with criteria', () => {
    const sdk = {
      form: {
        getValue: async () => {
          return contentWithCriteria;
        },
      },
      params: {
        installation: {
          apiUrl: 'https://8tk4w9mmw8.execute-api.eu-west-1.amazonaws.com/amplience-dev-uk-info-prod',
        },
      },
    } as any;

    return (
      <SdkContext sdk={sdk}>
        <ManagedCoverageReport />
      </SdkContext>
    );
  })
  .add('Error state', () => {
    const sdk = {
      form: {
        getValue: async () => {
          return contentWithCriteria;
        },
      },
      params: {
        installation: {
          apiUrl: 'https://8tk4w9mmw8.execute-api.eu-west-1.amazonaws.com/amplience-dev-uk-info-pro',
        },
      },
    } as any;

    return (
      <SdkContext sdk={sdk}>
        <ManagedCoverageReport />
      </SdkContext>
    );
  });
