import React, { useEffect,useState } from 'react';
import './NavBar.css';
import icon from '../../images/icon.png'
import { useHistory } from 'react-router-dom';
import { ClearUserInfo, InsertUserInfo,getUserInfo } from '../../Utilities/SessionData';

const NavBar = () => {

    const history=useHistory();

  const changeRoute=(path)=>
  {
      history.push('/'+path);
  }

 
    return (
        <nav style={{'cursor':'pointer'}}  className="navbar navbar-expand-lg navbar-light  backColor my-nav">
        <a onClick={()=>changeRoute('home')} className="navbar-brand namestyle" style={{ 'fontFamily': 'cursive', cursor : 'pointer'}}><b className="log">D</b>eshMart</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <a className="nav-link text-white mr-5 " href="#"><b>Home</b> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mr-5" href="#"><b>Link</b></a>
            </li>

            <li>

               <p>{getUserInfo().displayName}</p>

            </li>
           <li>

       {getUserInfo().displayName==undefined?    <a onClick={()=>changeRoute('DeshMart/login')} className="nav-link text-white mr-5" ><b>Sign In</b></a>

         :  <a onClick={()=>ClearUserInfo()} className="nav-link text-white mr-5" ><b>Sign Out</b></a>
    }


           </li>
         
          </ul>

          
         
        </div>
      </nav>
    );
};

export default NavBar;