import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Typography } from '@material-ui/core';
import { ProgressBar, ErrorMessage } from '../../components';
import If from '../If';
import CoverageReportRecommendations from './CoverageReportRecommendations';
import CoverageReportSummary from './CoverageReportSummary';

const styles = (theme: Theme) => ({
  root: {
    paddingLeft: 10,
    padingRight: 25,
    paddingBottom: 10,
    borderRadius: '0px',
  },
  title: {},
  progressBar: {
    marginTop: 10,
    width: '100%',
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
        <CoverageReportSummary tags={tags} missions={missions} />
        <CoverageReportRecommendations suggestedTarget={suggestedTarget} />
      </If>
      <If condition={!error}>
        <div className={classes.progressBar}>
          <ProgressBar loading={loading} value={value} />
        </div>
      </If>
      <If condition={error}>
        <ErrorMessage>
          Sorry we are unable to calculate relevancy scores due to a problem retrieving the necessary data.
        </ErrorMessage>
      </If>
    </Paper>
  );
};

export default withStyles(styles)(CoverageReport);
