import { storiesOf } from '@storybook/react';
import React from 'react';
import { MessageInfo, MessageError } from '..';
import TrendIcon from '../TrendIcon';
import Message from './Message';

storiesOf('Message', module)
  .add('no message', () => <MessageInfo />)
  .add('text', () => <MessageError text="Lorem ipsum dolor sit amet" />)
  .add('children', () => (
    <Message icon={TrendIcon}>
      <h1>Lorem ipsum dolor sit amet</h1>
    </Message>
  ));
