import React, { useEffect,useState } from 'react';
import './NavBar.css';
import icon from '../../images/icon.png'
import { useHistory } from 'react-router-dom';
import { ClearUserInfo, InsertUserInfo,getUserInfo } from '../../Utilities/SessionData';
import {AiFillTag} from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import { handleSignOut } from '../Login/Login';


const NavBar = () => {

    const history=useHistory();

  const changeRoute=(path)=>
  {
      history.push('/'+path);
  }

  // <a onClick={()=>ClearUserInfo()} className="nav-link text-white mr-5" ><b>Sign Out</b></a>

 
    return (
        <nav style={{'cursor':'pointer'}}  className="navbar navbar-expand-lg navbar-light  backColor my-nav">
        <a onClick={()=>changeRoute('home')} className="navbar-brand namestyle" style={{ 'fontFamily': 'cursive', cursor : 'pointer'}}><AiFillTag style={{color:'orange'}}/><b className="log">D</b>esh<b className="log">M</b>art</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <a className="nav-link text-black mr-5 " href="/home"><b>Home</b> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-black mr-5" href="/Details/mensdress"><b>Men</b></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-black mr-5" href="/Details/womensdress"><b>Women</b></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-black mr-5" href="/ReviewShow"><b>Reviews</b></a>
            </li>
          
           <li>

       {getUserInfo().displayName==undefined?    <a onClick={()=>changeRoute('DeshMart/login')} className="nav-link active text-black mr-5" ><b>Sign In</b></a>



         : 
         
         <Dropdown >

<Dropdown.Toggle className="dropname" variant="dark" id="dropdown-basic">

{getUserInfo().displayName }
        
         </Dropdown.Toggle>
        

         <Dropdown.Menu>

         <Dropdown.Item onClick={()=>history.push('/ReviewCart')}>Orders</Dropdown.Item>

         <Dropdown.Item onClick={()=>history.push('/Details/smartproducts')}>Recommendations</Dropdown.Item>


         <Dropdown.Item onClick={()=>
          {
            ClearUserInfo();
            handleSignOut();
            }}>Sign Out</Dropdown.Item>

        
       
  </Dropdown.Menu>
         </Dropdown>
    }


           </li>
         
          </ul>

          
         
        </div>
      </nav>
    );
};

export default NavBar;