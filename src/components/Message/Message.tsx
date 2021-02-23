import React from 'react';
import { Theme, Typography, withStyles, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    fontWeight: 600,
    color: '#333',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: 10,
    alignSelf: 'center',
  },
  content: {
    alignSelf: 'center',
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;
  icon: React.ComponentType<any>;
  text?: string;
  children?: React.ReactNode;
}

const Message = (props: Props) => {
  const { classes, text, icon: Icon, children } = props;
  const content = text ?? children;

  return (
    <>
      {content && (
        <Typography variant="body2" component="div" className={classes.root}>
          <Icon className={classes.icon}></Icon>
          <div className={classes.content}>{text ?? children}</div>
        </Typography>
      )}
    </>
  );
};

export default withStyles(styles)(Message);
