import React from 'react';
import { Link } from 'react-router-dom';
import './SideItem.css';

const SideItem = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        <span>Dashboard</span> 
                   
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white">
                     <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                       <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                     <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                     <span>Setting</span>
                    </Link>
                </li>
            </ul>
         
        </div>
    );
};
 
export default SideItem;