import { storiesOf } from '@storybook/react';
import React from 'react';
import CriteriaField from './CriteriaField';

storiesOf('CriteriaField', module)
  .add('Initial State', () => (
    <CriteriaField
      label="Behaviours"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      options={['One', 'Two', 'Three']}
      selected={['One']}
      infoMessage="Selected behaviours target 38.50% of average website traffic"
    />
  ))
  .add('Loading', () => (
    <CriteriaField
      label="Behaviours"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      options={['One', 'Two', 'Three']}
      selected={['One']}
      infoMessage="Selected behaviours target 38.50% of average website traffic"
      infoLoading={true}
    />
  ));
