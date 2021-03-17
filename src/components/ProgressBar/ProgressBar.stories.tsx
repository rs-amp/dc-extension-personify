import { storiesOf } from '@storybook/react';
import React from 'react';
import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module)
  .add('Initial State', () => <ProgressBar />)
  .add('25%', () => <ProgressBar value={0.25} />)
  .add('50%', () => <ProgressBar value={0.5} />)
  .add('70%', () => <ProgressBar value={0.7} />)
  .add('100%', () => <ProgressBar value={1} />)
  .add('Loading', () => <ProgressBar value={0.5} loading={true} />);
