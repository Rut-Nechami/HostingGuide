import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelects from './Select';
import Badatz from './hechsherimImages/1.jpg';
import Rubin from './hechsherimImages/2.jpg';
import Machzikei from './hechsherimImages/3.jpg';
import Landow from './hechsherimImages/4.jpg';
import Sherit from './hechsherimImages/5.jpg';
import HatamSofer from './hechsherimImages/6.jpg';
import Agudas from './hechsherimImages/7.jpg';
import BeitYosef from './hechsherimImages/9.jpg';




const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const hechsherim = [
  {name:'Badatz',image:Badatz},
  {name:'Rubin',image:Rubin},
  {name:'Machzikei',image:Machzikei},
  {name:'Landow',image:Landow},
  {name:'sherit',image:Sherit},
  {name:'HatamSofer',image:HatamSofer},
  {name:'Agudas',image:Agudas},
  {name:'BeitYosef',image:BeitYosef},
];

// const religios = [
//     'religious',
//     'National Religious',
//     'orthodox',
//     'secular'
//   ];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    props.func(event.target.value);
    setPersonName(event.target.value);
    console.log(personName);
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Hechsherim</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
           value={personName}
          // value={personName.map((ev)=>(
          //     <div>{ev}</div>))}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {hechsherim.map((name) => (
            <MenuItem key={name.name} value={name.name} style={getStyles(name.name, personName, theme)}>
              <img src={name.image} width={50} height={25}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
     
  );
}
