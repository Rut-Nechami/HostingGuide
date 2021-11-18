import React, { useState } from 'react';
import { TextField, Button, Checkbox, NumericField } from '@material-ui/core';
import MultipleSelect from './Hechsherim'
import SimpleSelect from './Select';


const MoreDetails = (props) => {
    
  //const [getDetailsFromMoreDetails]= props.func;
  const [hechsherim,setHechsherim]=useState([]);
  const [religiousLevel,setReligiousLevel]=useState('');
  const [priority,setPriority]=useState('');
  const [specialCustoms,setSpecialCustoms]=useState('');
  const [occupationFather,setOccupationFather]=useState('');
  const [occupationMother,setOccupationMother]=useState('');
  const [maximumGuests,setMaximumGuests]=useState(0);
  
   function onchangeReligous(religiousLevel)
     {setReligiousLevel(religiousLevel);}
    //console.log(religiousLevel);
  function onchangePriority(priority)
     {setPriority(priority);}
     function onchangeHechsherim(hechsherim)
     {setHechsherim([...hechsherim]);}
    //console.log(hechsherim);
  function sh() {
    console.log("sh");
  }
  return (
    <div>
      <MultipleSelect  func={onchangeHechsherim} />
      <SimpleSelect list={["Religious", "National Religious", "orthodox","secular"]} title="Religious level" func={onchangeReligous}/>
      <SimpleSelect list={["Boys","Girls","Doesn't matter"]} title="Priority" func={onchangePriority}/>
      <label>Special customs</label>
      <input onChange={(e) => setSpecialCustoms(e.target.value)}></input><br />
      <label>Occupation's father</label>
      <input onChange={(e) => setOccupationFather(e.target.value)}></input><br />
      <label>Occupation's mother</label>
      <input onChange={(e) => setOccupationMother(e.target.value)}></input><br />
      <label>Maximum  Guests</label>   
      <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(e) => setMaximumGuests(e.target.value)}/>
          {/* <button onClick={show}> show </button> */}
          <Button onClick={props.func(religiousLevel)}
          // ,priority,specialCustoms,occupationFather,occupationMother,maximumGuests)}
          >ADD SPECIAL DETAILS</Button>
    </div>
  )
}
export default MoreDetails;