import React, { useState } from 'react'

import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'

import { ClearUserInfo, InsertUserInfo } from '../../Utilities/SessionData';
import { useHistory, useLocation } from 'react-router-dom';
import {AiFillTag} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import swal from 'sweetalert';




if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const  handleSignOut = () => {

  firebase.auth().signOut()
    .then(result => {

      ClearUserInfo();

    }).catch(error => console(error, error.message));


}


const Login = () => {

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const history=useHistory();

  const [userInformation,setUserInformation]=useState({

    

    
  });

    const location=useLocation();

    let {from}=location.state  || {from :{pathname:'/home'}};


    const [loginUser,setLoginUser]=useState({});

    const LoginCheck=(email)=>
    {

      //console.log(email,typeof(email));

        
      history.replace(from);

       
    }

  const handleGoogleSignIn = () => {



    firebase.auth().signInWithPopup(googleProvider)
      .then(result => {

        const { displayName, emailVerified, email } = result.user;

        InsertUserInfo( { displayName, emailVerified, email });


        LoginCheck(email);

        window.location.reload(false);

        console.log(result)


      })
      .then(err => console.log(err));
  }


   

  const handleFbSignIn=()=>{
 
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
     
      var token = result.credential.accessToken;
     

      const { displayName, emailVerified, email } = result.user;

        InsertUserInfo( { displayName, emailVerified, email });

        history.push('/home');

        window.location.reload(false);
 
 
           
 
 
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;


      console.log(2,error);
      // ...
    });
    
  }



  const handleBlurSignUp = (event) => {
 
 
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


       if(!isPasswordValid && !passHasNumber)
      swal('Your password should contain at least seven characters and one digit');
       else if(isPasswordValid==false)
       swal('Your password should contain at least seven characters');

      else if(passHasNumber==false)
      swal('Your password shoould contain minimum one digit');

     
 
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

  const handleBlurSignIn=(event)=>
  {
    const newUserInfo = { ...loginUser };
 
      newUserInfo[event.target.name] = event.target.value;

 
      setLoginUser(newUserInfo);
  }

  const signupForm=(e)=>
  {

    console.log(1,userInformation);

    if (userInformation.displayName && userInformation.email && userInformation.password) {

     
      firebase.auth().createUserWithEmailAndPassword(userInformation.email, userInformation.password)
        .then(res => {

       
          updateUserName(userInformation.displayName)
          

        
 
        })
        .catch((error) => {
 
          swal('already have a account');


 
         
        });
    }
   
    e.preventDefault();
        

  }

  const ChangeSignUpForm=()=>
  {
    
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
   
  }


  function updateUserName(name) {
 
    var user = firebase.auth().currentUser;

 
    user.updateProfile({
      displayName: name,
 
    }).then(function () {
       swal("Congratulation!", "You Are Successfully Registered!", "success");

       ChangeSignInForm();


      
    }).catch(function (error) {
      console.log(error);
    });

    
 
 
  }

  

 
  const ChangeSignInForm = () => {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }


  const signinForm=(e)=>
  {
          
       if(loginUser.emailSignIn && loginUser.passwordSignIn)
       {
          // console.log('hamaisi sign in');


           firebase.auth().signInWithEmailAndPassword(loginUser.emailSignIn,loginUser.passwordSignIn)
           .then(result=>
            {

              const { displayName, emailVerified, email } = result.user;

              InsertUserInfo( { displayName, emailVerified, email });
      
              history.push('/home');
      
              window.location.reload(false);
                  
            })
            .catch(err=>
              {
                swal(err);
              })
  
       }

       e.preventDefault();
  }










      return (
        <div className='FormSignIN'>
        
          <div className="container" id="container" style={{marginTop: '115px'}}>
            <div className="form-container sign-up-container">

              <form  onSubmit={signupForm} className="Test" >
                <h1 className="Test">Create Account</h1>
                <div className="social-container">
                  <a className="Test" onClick={handleFbSignIn} className="social"><FaFacebook size="2rem"/></a>
                  <a className="Test" onClick={handleGoogleSignIn} className="social"><FcGoogle size="2rem"/></a>
                </div>
                <span className="Test">or use your email for registration</span>
                <input className="Test" onBlur={handleBlurSignUp} name='displayName'  type="text" placeholder="Name" required/>
                <input className="Test" onBlur={handleBlurSignUp}  name='email'  type="email" placeholder="Email" required />
                <input className="Test" onBlur={handleBlurSignUp}  name='password' type="password" placeholder="Password"  required />
                <button type='submit' className="Test" >Sign Up</button>
              </form>

            </div>

            <div className="form-container sign-in-container">

              <form onSubmit={signinForm} className="Test">
                <h1 className="Test">Sign in</h1>
                <div className="social-container">
                  <a className="Test" onClick={handleFbSignIn} className="social"><FaFacebook size="2rem"/></a>
                  <a className="Test" onClick={handleGoogleSignIn} className="social"><FcGoogle size="2rem"/></a>
                </div>
                <span className="Test">or use your account</span>
                <input className="Test" onBlur={handleBlurSignIn} name='emailSignIn' type="email" placeholder="Email" required />
                <input className="Test" onBlur={handleBlurSignIn} name='passwordSignIn' type="password" placeholder="Password" required/>
                <a className="Test" >Forgot your password?</a>
                <button type='submit' className="Test" >Sign In</button>
              </form>
            </div>

            
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem'}}><AiFillTag style={{color: 'orange'}}/><b className="logg">D</b>esh<b className="logg">M</b>art</span>
                  <p className="Test">Welcome back! To keep connected with us please login with your personal info</p>
                  <button  className="ghost Test" id="signIn" onClick={ChangeSignInForm}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right"> 
               <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem'}}><AiFillTag style={{color: 'orange'}}/><b className="logg">D</b>esh<b className="logg">M</b>art</span>
                  <p className="Test">Hello! Enter your personal details and start journey with us</p>
                  <button  className="ghost Test" id="signUp" onClick={ChangeSignUpForm}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

};

export default Login;

