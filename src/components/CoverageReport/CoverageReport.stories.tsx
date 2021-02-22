import { storiesOf } from '@storybook/react';
import React from 'react';
import CoverageReport from './CoverageReport';

storiesOf('CoverageReport', module)
  .add('Initial State', () => <CoverageReport />)
  .add('25%', () => <CoverageReport value={0.25} />)
  .add('50%', () => <CoverageReport value={0.5} />)
  .add('75%', () => <CoverageReport value={0.75} tags={['Beauty', 'Christmas']} />)
  .add('Loading', () => <CoverageReport value={0.75} loading={true} />)
  .add('Error', () => <CoverageReport error={{ message: 'An error occurred' } as Error} loading={false} />);
