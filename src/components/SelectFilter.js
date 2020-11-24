import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1)
  },
  whiteColor: {
    color: "white"
  }
}));

const SelectFilter = ({ name, label, value, onChangeHandler, items, disabled = false }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} disabled={disabled}>
      <InputLabel
        id={`${name}-label`}
        focused={false}
        classes={{root: classes.whiteColor}}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${name}-label`}
        name={name}
        value={value}
        onChange={onChangeHandler}
        classes={{
          root: classes.whiteColor,
          icon: classes.whiteColor
        }}
      >
        {items.map((item, key) => (
          <MenuItem
            key={key}
            value={item.value}
            disabled={!!item.disabled}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;