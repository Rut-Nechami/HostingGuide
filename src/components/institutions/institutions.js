import React, { useState } from 'react';
import HostsList from './hostslist';

const Institutions = () => {

 const [show,setShow]= useState(false);
 const [list,setList]=useState([]);

function getAllHosts() {
    
    fetch(`http://localhost:3001/host/getAllHosts`)
    .then((res) => res.json())
    .catch((err)=>{alert("error occured try again");console.log(err)})
    .then((data)=>{
      console.log("data ",data.hosts);
       setShow(true);
       setList(data.hosts);
      })
    .catch((err) => {
      console.log("error", err);
    });
}

    return (
        <div>
          Dear institutional director!!!! 
           <div>          
           <div>We don’t take care of the families we have here,</div>
           It's your job, 
           go over the list
           <div>and –
           decide which of the families 
           meets your criteria</div></div>
        <button >Update data</button> 
        <button onClick={getAllHosts}>Hosts List</button>
        <div>{show?<HostsList list={list}></HostsList>:null}</div>
        </div>
    )
}
export default Institutions;