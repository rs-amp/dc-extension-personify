import React, { useMemo } from 'react';
import { withStyles, WithStyles, Theme, LinearProgress, ThemeProvider, createMuiTheme } from '@material-ui/core';
import clsx from 'clsx';

const styles = (theme: Theme) => ({
  root: {
    height: 32,
    width: '100%',
    background: '#E5E5E5',
    position: 'relative' as 'relative',
  },
  bar: {
    height: 32,
    transition: 'width 1s',
  },
  low: {
    background: 'red',
  },
  medium: {
    background: '#FD8200',
  },
  high: {
    background: '#2DD000',
  },
  loading: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    top: 0,
    position: 'absolute' as 'absolute',
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;

  value?: number;
  loading?: boolean;
}

const ProgressBar: React.SFC<Props> = (props) => {
  const { classes, value = 0, loading = false } = props;

  const progressTheme = useMemo(() => {
    return createMuiTheme({
      palette: {
        primary: {
          main: '#E5E5E5',
        },
      },
    });
  }, []);

  return (
    <div className={classes.root}>
      <div
        className={clsx(classes.bar, {
          [classes.low]: value <= 0.25,
          [classes.medium]: value > 0.25 && value < 0.7,
          [classes.high]: value >= 0.7,
        })}
        style={{ width: `${Math.round(value * 100)}%` }}
      ></div>
      {loading ? (
        <div className={classes.loadingContainer}>
          <ThemeProvider theme={progressTheme}>
            <LinearProgress color="primary" className={classes.loading} />
          </ThemeProvider>
        </div>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(ProgressBar);
