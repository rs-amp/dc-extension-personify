import React from 'react';
import { TrendIcon } from '..';
import { Theme, withStyles, WithStyles } from '@material-ui/core';
import Message from './Message';

const styles = (theme: Theme) => ({
  root: {},
  icon: {
    width: '24x',
    height: '24px',
    marginRight: 10,
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  children?: React.ReactNode;
}

const MessageInfo = (props: Props) => {
  return <Message icon={TrendIcon} {...props} />;
};

export default withStyles(styles)(MessageInfo);
