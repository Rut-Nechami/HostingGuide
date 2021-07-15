import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Details from './details';
import Date from './updateDate';

const Hosts = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [showDates, setShowDates] = useState(false);

    function clickedChangeDetails() {
        console.log("");
        setShowDetails(true);
    }

    function clickedChangeDates() {
        console.log("");
        setShowDates(true);
    }
    return (
        <div>
            <div>
                Hello dear family!!<br></br>
                We respect you so much<br></br>
                and thank you<br></br>
                for all that you did<br></br>
                and continue to do😍😍
             </div>
            <Button variant="contained" color="primary" onClick={clickedChangeDetails}>Update details</Button>
            <Button variant="contained" color="primary" onClick={clickedChangeDates}>Update date</Button>
            {showDetails ? <Details ></Details> : null}
            {showDates ? <Date ></Date> : null}
        </div>
    )
}

export default Hosts;