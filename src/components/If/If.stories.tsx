import { storiesOf } from '@storybook/react';
import React from 'react';
import If from './If';

storiesOf('If', module)
  .add('Should render', () => <If condition={true}>I should render</If>)
  .add('Should not render', () => <If condition={false}>I should not render</If>);
