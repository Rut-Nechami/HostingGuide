import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function signIn() {
    console.log("I got to here!!!!");
    console.log(userName + ' ' + password);
    
    fetch(`http://localhost:3001/users/signIn/${userName}/${password}`)
      .then((res) => res.json())
      .then((data)=>{
         console.log(data);
         if(data.theUser.kind==1) 
         history.push("/Hosts");
         else if(data.theUser.kind==2)
         history.push("/Institutions");
         else if(data.theUser.kind==3)
       history.push("/Student");
        }) 
  
      .catch((err) => {
        console.log("error", err);
      });


  }


  return (
    <div noValidate autoComplete="off">
      <div>
        <TextField id="outlined-basic" label="UserName:" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button variant="contained" color="primary" onClick={signIn}>
        Sign in
        </Button>
    </div>
  )
}

export default SignIn;