import { storiesOf } from '@storybook/react';
import React from 'react';

import { SdkContext } from '../../components';
import ManagedCriteria from './ManagedCriteria';

storiesOf('ManagedCriteria', module).add('Initial State', () => {
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
