import React ,{useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Details = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [address, setaddress] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    

    const history = useHistory();
    function Register() {
        console.log("Register");
       // history.push("/EndRegisterIs");
    
        return fetch(`http://localhost:3001/institution/createInstitution/${userName}/${password}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ phoneNumber,address,city,email })
        })
            .then((res) => {if (res.status==200) console.log("you added") })
            .catch((err) => {
                console.log("error occured"+err);
            })
    
    }
  
    return (
        <div>
            Basic Details
            <br />
            <TextField id="outlined-basic" label="InstitutionName:" variant="outlined" onChange={(e) => setUserName(e.target.value)}/><br />
            <TextField id="outlined-basic" label="Password:" variant="outlined" onChange={(e) => setPassword(e.target.value)}/><br />
            <TextField id="outlined-basic" label="Phone Number:" variant="outlined" onChange={(e) => setphoneNumber(e.target.value)}/><br />
            <TextField id="outlined-basic" label="Address:" variant="outlined" onChange={(e) => setaddress(e.target.value)}/><br />
            <TextField id="outlined-basic" label="City:" variant="outlined" onChange={(e) => setCity(e.target.value)}/><br />
            <TextField id="outlined-basic" label="Email:" variant="outlined" onChange={(e) => setEmail(e.target.value)}/><br />
            <br /><br />
            <Button variant="contained" color="red" onClick={Register}>WE'RE JOINING TOO😍😍😍</Button>
        </div>
    )
    }

export default Details;