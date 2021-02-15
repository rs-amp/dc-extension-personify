import React, { useMemo } from 'react';
import { withStyles, WithStyles, Theme, Paper, Typography, Chip } from '@material-ui/core';
import ProgressBar from '../ProgressBar/ProgressBar';
import TrendIcon from '../TrendIcon';

const styles = (theme: Theme) => ({
  root: {
    paddingLeft: 10,
    padingRight: 25,
    paddingBottom: 10,
    borderRadius: '0px',
  },
  title: {},
  summary: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
  },
  percentage: {
    marginRight: 20,
  },
  progressBar: {
    marginTop: 10,
    width: '100%',
  },
  reccomendations: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
  },
  relevancy: {
    lineHeight: 1.5,
  },
  chips: {
    marginLeft: 10,
  },
  chip: {
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#e5e5e5',
    borderRadius: '8px',
  },
  icon: {
    width: 24,
    height: 24,
    fill: '#2DD000',
    marginRight: 20,
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;

  value?: number;
  loading?: boolean;
  missions?: string[];
  tags?: string[];

  suggestedTarget?: {
    target: string;
    type: 'TAG' | 'MISSION';
    coverage: number;
  };
}

const CoverageReport = (props: Props) => {
  const { classes, value = 0, loading = false, tags, missions, suggestedTarget } = props;

  const uniqueTags = useMemo(() => {
    const set = new Set([...(tags || []), ...(missions || [])]);
    return Array.from(set);
  }, [tags, missions]);

  const percentage = (value * 100).toFixed(2);

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Content relevance
      </Typography>
      <div className={classes.summary}>
        <Typography variant="h4" className={classes.percentage}>
          {percentage}%
        </Typography>
        <Typography variant="subtitle1" className={classes.relevancy}>
          The currently targeted content will be relevant to {percentage}% of your visitors
        </Typography>
        <div className={classes.chips}>
          {uniqueTags.map((tag) => {
            return <Chip clickable={false} className={classes.chip} label={tag} key={tag} size="small" />;
          })}
        </div>
      </div>
      <div className={classes.progressBar}>
        <ProgressBar loading={loading} value={value} />
      </div>
      <div className={classes.reccomendations}>
        {suggestedTarget ? (
          <>
            <TrendIcon className={classes.icon} />
            <Typography variant="subtitle1">
              Increase relevance to {(suggestedTarget.coverage * 100).toFixed(2)}% by targeting{' '}
              {suggestedTarget.type === 'TAG' ? 'tag' : 'behaviour'} "{suggestedTarget.target}"
            </Typography>
          </>
        ) : null}
      </div>
    </Paper>
  );
};

export default withStyles(styles)(CoverageReport);
