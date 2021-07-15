import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from '../components/login/login';
import NewHost from './new-host/new_host';
import NewInstitution from './new-institution/new-institution';
import EndRegisterHost from './new-host/endRegisterHost';
import EndRegisterIs from './new-institution/EndRegisssterIns';
import Student from './students/student';
import Hosts from './hosts/hosts';
import Institutions from './institutions/institutions';

const URL = () => {
    return (
        <Router>
            <Switch>
                <Route path="/NewHost" children={<NewHost/>} />
                <Route path="/NewInstitution" children={<NewInstitution/>} />
                <Route path="/EndRegisterHost" children={<EndRegisterHost/>} />
                <Route path="/EndRegisterIs" children={<EndRegisterIs/>} />
                <Route path="/Student" children={<Student/>} />
                <Route path="/Hosts" children={<Hosts/>} />
                <Route path="/Institutions" children={<Institutions/>} />
                <Route path="/" children={<Login />} />
            </Switch>
       </Router>
    )
}
export default URL;