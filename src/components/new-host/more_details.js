import React from 'react';
import { TextField, Button, Checkbox, NumericField } from '@material-ui/core';
import MultipleSelect from './Hechsherim'
import SimpleSelect from './Select';


const MoreDetails = (props) => {
    
  //const [hostName,phone_Number,address,city]= props;
  return (
    <div>
      <MultipleSelect  />
      <SimpleSelect list={["Religious", "National Religious", "orthodox","secular"]} title="Religious level"/>
      <SimpleSelect list={["Boys","Girls","Doesn't matter"]} title="Priority"/>
      <label>Special customs</label>
      <input></input><br />
      <label>Occupation's father</label>
      <input></input><br />
      <label>Occupation's mother</label>
      <input></input><br />
      <label>Maximum  Guests</label>   
      <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button onClick={props.setState()}>ADD SPECIAL DETAILS</Button>
    </div>
  )
}
export default MoreDetails;