import React from 'react';
import { withStyles, WithStyles, Theme, Typography, LinearProgress } from '@material-ui/core';
import ChipSelector from '../ChipSelector/ChipSelector';
import clsx from 'clsx';
import { MessageError, MessageInfo } from '..';

const styles = (theme: Theme) => ({
  root: {},
  sectionLabel: {
    fontWeight: 'bold' as 'bold',
  },
  chips: {
    width: '100%',
    marginTop: 10,
  },
  info: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F2F1F2',
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  icon: {
    width: 24,
    height: 24,
    fill: '#CCCCCC',
    marginRight: 10,
  },
  progress: {
    width: '100%',
    height: 4,
    marginTop: -4,
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;

  label: string;
  description: string;
  options: string[];
  selected: string[];
  onChange?: (selected: string[]) => void;

  infoMessage?: string;
  infoLoading?: boolean;

  error?: Error;
}

const CriteriaField: React.FC<Props> = (props) => {
  const {
    className,
    classes,
    label,
    description,
    options,
    selected,
    infoMessage,
    infoLoading,
    error,
    onChange,
  } = props;

  return (
    <div className={clsx(classes.root, className)}>
      <Typography className={classes.sectionLabel} variant="subtitle1">
        {label}
      </Typography>
      <Typography variant="caption">{description}</Typography>

      <div>
        <ChipSelector
          className={classes.chips}
          options={options}
          selected={selected}
          disabled={Boolean(error)}
          onChange={onChange}
        />
      </div>
      <div className={classes.info}>
        {error ? <MessageError text={error.message} /> : <MessageInfo text={infoMessage} />}
      </div>
      {infoLoading && <LinearProgress color="primary" className={classes.progress} />}
    </div>
  );
};

export default withStyles(styles)(CriteriaField);
