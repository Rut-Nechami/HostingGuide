import React from 'react';

const EndRegister= (props)=>{
     
    return(
     <div>
       <tr>WELCOME SPECIAL FAMILY</tr>
    <div>Your password: {props.password}</div>
    <div>Your userName is the Name you have registered before: {props.username}</div>
     </div>
    )
}
export default EndRegister;