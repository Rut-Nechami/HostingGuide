import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
//import MoreDetails from './more_details';
import MultipleSelect from './Hechsherim'
import SimpleSelect from './Select';
import { useHistory } from 'react-router-dom';

const Details = () => {
    const [show, setShow] = useState(false);
    const [hostName, setHostName] = useState('');
    const [phone_Number, setPhone_Number] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const history = useHistory();
    function showMore() {
        setShow(!show);
        setHostName(this.refs.HostName.getValue());
        setPhone_Number(this.refs.Phone_Number.getValue());
        setAddress(this.refs.Address.getValue());
        setCity(this.refs.City.getValue());
    }
    function Register() {
        console.log("Register");
      
        history.push("/EndRegisterHost");
    }
    return (
        <div>Basic Details<br />
            <TextField id="outlined-basic" label="HostName:" refs="HostName:" variant="outlined"/><br />
            <TextField id="outlined-basic" label="Password:" refs="Password:" variant="outlined" /><br />
            <TextField id="outlined-basic" label="PhoneNumber:" refs="Phone_Number:" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Address:" refs="Address:" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Email:" refs="Email:" variant="outlined" /><br />
            <TextField id="outlined-basic" label="City:" refs="City" variant="outlined" /><br />
            <div></div>
            <Button variant="contained" color="primary" onClick={showMore}>We want to get to know you better</Button>
           
            {/* hostName={hostName} phone_Number={phone_Number} address={address} city={city} */}
            <br></br>
            {show ? <Button variant="contained" color="red" onClick={Register}>WE'RE JOINING TOO😍😍😍</Button> : null}
        </div>      
    )

}
export default Details;