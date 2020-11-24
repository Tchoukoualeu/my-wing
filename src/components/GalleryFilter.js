import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import SelectFilter from './SelectFilter';
import { Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
  }
}));

const GalleryFilter = ({ filters, setFilters }) => {
  const classes = useStyles();

  const onChangeHandler = (event) => setFilters({
    ...filters,
    [event.target.name]: (
      event.target.name === 'showViral' ?
        event.target.checked
      : event.target.value
    )
  });

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.root}>
          <SelectFilter
            name="section"
            label="Section"
            value={filters.section}
            onChangeHandler={onChangeHandler}
            items={[
              {value: "hot", label: "Hot"},
              {value: "top", label: "Top"},
              {value: "user", label: "User"}
            ]}
          />
          <Divider orientation="vertical" flexItem />
          <SelectFilter
            name="sort"
            label="Sort"
            value={(
              filters.section !== 'user' && filters.sort === 'rising' ?
                'viral'
              : filters.sort
            )}
            onChangeHandler={onChangeHandler}
            items={[
              {value: "viral", label: "Viral"},
              {value: "top", label: "Top"},
              {value: "time", label: "Time"},
              {value: "rising", label: "Rising", disabled: filters.section !== 'user'}
            ]}
          />
          <Divider orientation="vertical" flexItem />
          <SelectFilter
            name="window"
            label="Window"
            value={filters.section !== 'top' ? 'day' : filters.window }
            onChangeHandler={onChangeHandler}
            items={[
              {value: "day", label: "Day"},
              {value: "week", label: "Week"},
              {value: "month", label: "Month"},
              {value: "year", label: "Year"},
              {value: "all", label: "All"}
            ]}
            disabled={filters.section !== 'top'}
          />
          <Divider orientation="vertical" flexItem />
          <FormControlLabel
            value="showViral"
            control={(
              <Switch
                name='showViral'
                size="small"
                color="secondary"
                checked={filters.section !== 'user' ? true : filters.showViral}
                onChange={onChangeHandler}
                disabled={filters.section !== 'user'}
              />
            )}
            label="Viral"
            labelPlacement="top"
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default GalleryFilter;