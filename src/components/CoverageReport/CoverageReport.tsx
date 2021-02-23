import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Typography } from '@material-ui/core';
import { ProgressBar, MessageError } from '../../components';
import If from '../If';
import CoverageReportRecommendations from './CoverageReportRecommendations';
import CoverageReportSummary from './CoverageReportSummary';

const styles = (theme: Theme) => ({
  root: {
    paddingLeft: 10,
    padingRight: 25,
    paddingBottom: 10,
    borderRadius: 0,
  },
  title: {
    marginBottom: 10,
  },
  progressBar: {
    marginTop: 10,
    width: '100%',
  },
  errorMessageIcon: {
    height: '35px',
    width: '35px',
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;

  value?: number;
  loading?: boolean;
  error?: Error;
  missions?: string[];
  tags?: string[];

  suggestedTarget?: {
    target: string;
    type: 'TAG' | 'MISSION';
    coverage: number;
  };
}

const CoverageReport = (props: Props) => {
  const { classes, value = 0, loading = false, error, tags, missions, suggestedTarget } = props;

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Content relevance
      </Typography>
      <If condition={!error && !loading}>
        <CoverageReportSummary tags={tags} missions={missions} value={value} />
        <CoverageReportRecommendations suggestedTarget={suggestedTarget} />
      </If>
      <If condition={!error}>
        <div className={classes.progressBar}>
          <ProgressBar loading={loading} value={value} />
        </div>
      </If>
      <If condition={error}>
        <MessageError text={error?.message} classes={{ icon: classes.errorMessageIcon }} />
      </If>
    </Paper>
  );
};

export default withStyles(styles)(CoverageReport);
