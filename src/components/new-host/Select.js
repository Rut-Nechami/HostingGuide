import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    console.log(event);
    setAge(event.target.value);
    props.func(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {props.list.map(item =><MenuItem value={item}>{item}</MenuItem>)}
          {/* 
          <MenuItem value={20}>National Religious</MenuItem>
          <MenuItem value={30}>Orthodox</MenuItem>
          <MenuItem value={40}>Secular</MenuItem> */}
        </Select>
      </FormControl>
      </div>
  );
}
