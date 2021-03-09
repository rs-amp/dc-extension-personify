import { storiesOf } from '@storybook/react';
import React from 'react';
import CoverageReport from './CoverageReport';

storiesOf('CoverageReport', module)
  .add('Initial State', () => <CoverageReport />)
  .add('25%', () => <CoverageReport value={0.25} />)
  .add('50%', () => <CoverageReport value={0.5} />)
  .add('75%', () => <CoverageReport value={0.75} tags={['Beauty', 'Christmas']} />)
  .add('Loading', () => <CoverageReport value={0.75} loading={true} />)
  .add('Unsaved and loading', () => <CoverageReport value={0.0} loading={true} unsaved={true} />)
  .add('Unsaved and loaded', () => <CoverageReport value={0.0} unsaved={true} />)
  .add('Unsaved and error', () => (
    <CoverageReport value={0.0} unsaved={true} error={{ message: 'An error occurred' } as Error} />
  ))
  .add('Error', () => <CoverageReport error={{ message: 'An error occurred' } as Error} loading={false} />);
