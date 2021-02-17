import { storiesOf } from '@storybook/react';
import React from 'react';
import ErrorMessage from './ErrorMessage';

storiesOf('ErrorMessage', module).add('Example', () => (
  <ErrorMessage>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utt dolore magna
    <a href="#">aliqua</a>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </ErrorMessage>
));
