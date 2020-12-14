

import React, { useState } from 'react'

import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'

import { ClearUserInfo, InsertUserInfo } from '../../Utilities/SessionData';
import { useHistory } from 'react-router-dom';




if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


const Login = () => {

  const provider = new firebase.auth.GoogleAuthProvider();

  const history=useHistory();

  const [userInformation,setUserInformation]=useState({

    

    
  });

  const handleGoogleSignIn = () => {



    firebase.auth().signInWithPopup(provider)
      .then(result => {

        const { displayName, photoURL, email } = result.user;

        InsertUserInfo( { displayName, photoURL, email });

        history.push('/home');

        window.location.reload(false);


      })
      .then(err => console.log(err));
  }


  const handleSignOut = () => {

    firebase.auth().signOut()
      .then(result => {

        ClearUserInfo();

      }).catch(error => console(error, error.message));


  }




  const handleBlur = (event) => {
 
 
    let isFieldValid = true;
 
    if (event.target.name === 'email') {
 
      //console.log(event.target.value);
      const isEmailValid = /\S+@\S+\.\S+/
 
      isFieldValid &= isEmailValid.test(event.target.value);
 
      // console.log(isEmailValid.test(event.target.value));
    }
    else if (event.target.name === 'password') {
 
      const isPasswordValid = event.target.value.length > 6;
 
      const passHasNumber = /\d{1}/.test(event.target.value);
 
      isFieldValid &= isPasswordValid && passHasNumber;
 
      // console.log(isPasswordValid&&passHasNumber);
    }
    
 
 
    if (isFieldValid) {
      const newUserInfo = { ...userInformation };
 
      newUserInfo[event.target.name] = event.target.value;

      console.log(newUserInfo,event.target.name,event.target.value);
 
      setUserInformation(newUserInfo);
    }

  
 
 
 
  }

  const signupForm=(e)=>
  {

    console.log(1,userInformation);

    if (userInformation.displayName && userInformation.email && userInformation.password) {

      console.log('dsfsdfsdf')
      firebase.auth().createUserWithEmailAndPassword(userInformation.email, userInformation.password)
        .then(res => {

       
 
        
          updateUserName(userInformation.name,res)

        

        
 
        })
        .catch((error) => {
 
          alert('already have a account');


 
         
        });
    }
   
    e.preventDefault();
        

  }

  const ChangeForm=()=>
  {
    
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
   
  }


  const updateUserName = (name,res) => {
 
    var user = firebase.auth().currentUser;
 
    user.updateProfile({
      displayName: name,
 
    }).then(function () {
       console.log('Update Successfully',res);
    }).catch(function (error) {
      console.log(error);
    });

    
 
 
  }

 
  const signinForm = () => {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }










      return (
        <div className='FormSignIN'>
        
          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form >
                <h1>Create Account</h1>
                <div className="social-container">
                  <a  href="" className="social"><img src={facebook} className="fab fa-facebook-f" /></a>
                  <a onClick={handleGoogleSignIn} href="#" className="social"><img src={google} className="fab fa-google-plus-g" /></a>
                  <a href="#" className="social"><img className="fab fa-linkedin-in" /></a>
                </div>
                <span>or use your email for registration</span>
                <input onBlur={handleBlur} name='displayName'  type="text" placeholder="Name" required/>
                <input onBlur={handleBlur}  name='email'  type="email" placeholder="Email" required />
                <input onBlur={handleBlur}  name='password' type="password" placeholder="Password"  required />
                <button  onClick={signupForm}>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form >
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social"><img src={facebook} className="fab fa-facebook-f" /></a>
                  <a onClick={handleGoogleSignIn} href="#" className="social"><img src={{google}} className="fab fa-google-plus-g" /></a>
                  <a href="#" className="social"><img className="fab fa-linkedin-in" /></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
              </form>
            </div>

            
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <img src={google} />
                  <p>Welcome back! To keep connected with us please login with your personal info</p>
                  <button className="ghost" id="signIn" onClick={signinForm}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <img src={google} />
                  <p>Hello! Enter your personal details and start journey with us</p>
                  <button className="ghost" id="signUp" onClick={ChangeForm}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

};

export default Login;