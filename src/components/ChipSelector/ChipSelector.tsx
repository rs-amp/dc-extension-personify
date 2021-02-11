import React, { useState } from 'react';
import { withStyles, WithStyles, Theme, Select, Input, Chip, MenuItem } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import clsx from 'clsx';

const styles = (theme: Theme) => ({
  root: {
    height: 40,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
  },
  chip: {
    margin: 2,
    backgroundColor: '#e5e5e5',
    borderRadius: '8px',
  },
  doneIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  unSelected: {
    paddingLeft: 40,
  },
});

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: React.CSSProperties;

  selected: string[];
  options: string[];

  onChange?: (selected: string[]) => void;
}

const ChipSelector: React.SFC<Props> = (props) => {
  const { classes, className, options, selected, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeMultiple = (event: any) => {
    if (onChange) {
      onChange(event.target.value || []);
    }
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const isSelected = (option: string) => selected.includes(option);

  return (
    <Select
      className={clsx(classes.root, className)}
      multiple
      value={selected}
      onChange={handleChangeMultiple}
      input={<Input />}
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      renderValue={(selected) => (
        <div className={classes.chips}>
          {(selected as string[]).map((value: string) => (
            <Chip key={value} label={value} className={classes.chip} size="small" clickable={false} />
          ))}
          {(selected as string[]).length === 0 ? (
            <Chip disabled={true} label={'None'} className={classes.chip} size="small" />
          ) : null}
        </div>
      )}
      MenuProps={{
        PaperProps: {
          style: {
            minWidth: 'unset !important',
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option} className={!isSelected(option) ? classes.unSelected : ''}>
          {isSelected(option) ? <DoneIcon className={classes.doneIcon} /> : null}
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default withStyles(styles)(ChipSelector);
