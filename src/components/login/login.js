import React from "react";
import  Signin from "./signin";
import './login.css';
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Login=(props)=> {
    const history = useHistory();
    const NewInstitutionClick = () => {
        console.log("I press NewInstitutionClick");
        history.push("/NewInstitution");

    }
    const NewHostClick=()=>{
        console.log("I press NewHostClick");
        history.push("/NewHost");
    }

    return (
     <div className="login">
        <div>
            WHO ARE YOU?
        </div>
           <Signin/>
           <Button variant="contained" color="red"  onClick={NewInstitutionClick}>New Instituiton</Button>
           <Button variant="contained" color="red"  onClick={NewHostClick}>New Host</Button>
           {/* <Host/> */}
     </div>
    )
}

export default Login;