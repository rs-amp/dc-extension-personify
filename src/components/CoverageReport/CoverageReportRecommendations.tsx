import React from 'react';
import { withStyles, WithStyles, Theme, Typography } from '@material-ui/core';
import TrendIcon from '../TrendIcon';
import { toPercentage } from '../../utils/toPercentage';

const styles = (theme: Theme) => ({
  root: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
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

  suggestedTarget?: {
    target: string;
    type: 'TAG' | 'MISSION';
    coverage: number;
  };
}

const CoverageReportRecommendations = (props: Props) => {
  const { classes, suggestedTarget } = props;

  if (suggestedTarget) {
    const coverage = toPercentage(suggestedTarget.coverage);
    const type = suggestedTarget.type === 'TAG' ? 'tag' : 'behaviour';
    const target = suggestedTarget?.target;

    return (
      <div className={classes.root}>
        <TrendIcon className={classes.icon} />
        <Typography variant="subtitle1">
          Increase relevance to {coverage}% by targeting {type} "{target}"
        </Typography>
      </div>
    );
  }
  return <></>;
};

export default withStyles(styles)(CoverageReportRecommendations);
