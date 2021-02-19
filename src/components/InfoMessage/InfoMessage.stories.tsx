import { storiesOf } from '@storybook/react';
import React from 'react';
import MessageInfo from '../Message/MessageError';

storiesOf('MessageInfo', module)
  .add('no message', () => <MessageInfo />)
  .add('text', () => <MessageInfo text="Lorem ipsum dolor sit amet" />)
  .add('children', () => (
    <MessageInfo>
      <h1>Lorem ipsum dolor sit amet</h1>
    </MessageInfo>
  ));
