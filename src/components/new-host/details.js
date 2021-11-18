import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import MoreDetails from './more_details';
import MultipleSelect from './Hechsherim'
import SimpleSelect from './Select';
import { useHistory } from 'react-router-dom';

const Details = () => {
    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword]= useState('');
    const [phone_Number, setPhone_Number] = useState('');
    const [address, setAddress] = useState('');
    const [email,setEmail]= useState('');
    const [city, setCity] = useState('');
    const [religiousLevel,setReligiousLevel]=useState('');
    const [priority,setPriority]=useState('');
    const [specialCustoms,setSpecialCustoms]=useState('');
    const [occupationFather,setOccupationFather]=useState('');
    const [occupationMother,setOccupationMother]=useState('');
    const [maximumGuests,setMaximumGuests]=useState(0);
    const history = useHistory();
    function showMore() {
        console.log(email);
        setShow(!show);
    }

    function Register() {
        console.log();
        //validation
        // if(password.length<7){
        //     console.log("password needs to have at least 7 characters");
        //    alert("password needs to have at least 7 characters");
        //    return;}
        return fetch(`http://localhost:3001/host/createHost/${userName}/${password}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify( {tel:phone_Number,email:
                email,address:address, city:city,religiousLevel:religiousLevel,priority:priority,
                specialCustoms:specialCustoms,occupationFather:occupationFather,
                occupationMother:occupationMother,maximumGuests:maximumGuests})
        })
            .then((res) => {if (res.status==200) console.log("you added") })
            .catch((err) => {
                console.log(err);
            })
    
      
        history.push("/EndRegisterHost");
    }
    function sh(r) {
        setReligiousLevel(r);
        console.log(religiousLevel);
    }
    return (
        <div>Basic Details<br />
            <TextField id="outlined-basic" label="HostName:" refs="HostName:" variant="outlined" onChange={(e) => setUserName(e.target.value)}/><br />
            <TextField id="outlined-basic" label="Password:" refs="Password:" variant="outlined" onChange={(e) => setPassword(e.target.value)}/><br />
            <TextField id="outlined-basic" label="PhoneNumber:" refs="Phone_Number:" variant="outlined" onChange={(e) => setPhone_Number(e.target.value)}/><br />
            <TextField id="outlined-basic" label="Address:" refs="Address:" variant="outlined" onChange={(e) => setAddress(e.target.value)}/><br />
            <TextField id="outlined-basic" label="Email:" refs="Email:" variant="outlined" onChange={(e) => setEmail(e.target.value)}/><br />
            <TextField id="outlined-basic" label="City:" refs="City" variant="outlined" onChange={(e) => setCity(e.target.value)}/><br />
            <div></div>
            <Button variant="contained" color="primary" onClick={showMore}>We want to get to know you better</Button>
            {show?<MoreDetails func={sh}/>:null}
            {/* hostName={hostName} phone_Number={phone_Number} address={address} city={city} */}
            <br></br>
            {show ? <Button variant="contained" color="red" onClick={Register}>WE'RE JOINING TOO😍😍😍</Button> : null}
        </div>      
    )
}
export default Details;