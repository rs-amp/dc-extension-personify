import { storiesOf } from '@storybook/react';
import React from 'react';

import { SdkContext } from '../../components';
import ManagedCriteria from './ManagedCriteria';

storiesOf('ManagedCriteria', module)
  .add('Initial State', () => {
    const sdk = {
      field: {
        getValue: async () => {
          return {
            behaviors: ['Beauty'],
            tags: ['wfh'],
          };
        },
        setValue: () => {},
      },
      params: {
        installation: {
          apiUrl: 'https://8tk4w9mmw8.execute-api.eu-west-1.amazonaws.com/amplience-dev-uk-info-prod',
        },
      },
    } as any;

    return (
      <SdkContext sdk={sdk}>
        <ManagedCriteria />
      </SdkContext>
    );
  })
  .add('Error State', () => {
    const sdk = {
      field: {
        getValue: async () => {
          return {
            behaviors: ['Beauty'],
            tags: ['wfh'],
          };
        },
        setValue: () => {},
      },
    } as any;

    return (
      <SdkContext sdk={sdk}>
        <ManagedCriteria />
      </SdkContext>
    );
  });
