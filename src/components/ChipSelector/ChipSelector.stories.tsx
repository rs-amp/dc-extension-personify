import { storiesOf } from '@storybook/react';
import React from 'react';
import ChipSelector from './ChipSelector';

storiesOf('ChipSelector', module).add('Example', () => (
  <ChipSelector options={['One', 'Two', 'Three']} selected={['One']} />
));
