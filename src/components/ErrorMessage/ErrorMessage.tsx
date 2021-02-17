import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Theme, Typography, withStyles, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    fontWeight: 600,
    color: '#333',
  },
  outlineIcon: {
    width: '35px',
    height: '35px',
    marginRight: 10,
  },
  content: {
    alignSelf: 'center',
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  children?: React.ReactNode;
}

const ErrorMessage = (props: Props) => {
  const { classes, children } = props;

  return (
    <Typography variant="body2" component="div" className={classes.root}>
      <ErrorOutlineIcon className={classes.outlineIcon}></ErrorOutlineIcon>
      <div className={classes.content}>{children}</div>
    </Typography>
  );
};

export default withStyles(styles)(ErrorMessage);
