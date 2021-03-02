import React, { useMemo } from 'react';
import { withStyles, WithStyles, Theme, Typography, Chip } from '@material-ui/core';
import { toPercentage } from '../../utils/toPercentage';

const styles = (theme: Theme) => ({
  root: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
  },
  percentage: {
    marginRight: 20,
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
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;

  value?: number;
  missions?: string[] | null;
  tags?: string[] | null;
}

const CoverageReportSummary = (props: Props) => {
  const { classes, value = 0, tags, missions } = props;

  const uniqueTags = useMemo(() => {
    const set = new Set([...(tags || []), ...(missions || [])]);
    return Array.from(set);
  }, [tags, missions]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.percentage}>
        {toPercentage(value)}%
      </Typography>
      <Typography variant="subtitle1" className={classes.relevancy}>
        The currently targeted content will be relevant to {toPercentage(value)}% of your visitors
      </Typography>
      <div className={classes.chips}>
        {uniqueTags.map((tag) => {
          return <Chip clickable={false} className={classes.chip} label={tag} key={tag} size="small" />;
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(CoverageReportSummary);
