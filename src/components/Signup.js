import React, { useState } from "react";
import "./Signup.css";

import img1 from "../components/images/spotify.png";
import Buttonform from "./Buttonform";
const Signup = () => {

  //  const RegxPassword = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,15}$/
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
   
  // }
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (validateEmail(inputEmail)) {
      setErrorMessage('Email is valid');
      setIsEmailValid(true);
    } else {
      setErrorMessage('Please enter a valid email');
      setIsEmailValid(false);
    }
  };
   

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      alert('Form submitted successfully');
    } else {
      setErrorMessage('Please enter a valid email before submitting');
    }
  };

  

  return (
    <div className="signup">
      <div className="container-box" >
        <img src={img1} alt="err" />
        <h1>
          Sign up to <br />
          Start listening
        </h1>
        <div className="user-mail" onSubmit={ handleSubmit} >
          <h2>Email address</h2>
    
          <input type="text" placeholder= "email"   value={email}
          onChange={handleEmailChange}  style={{
            borderColor: isEmailValid || email === '' ? '#ced4da' : 'red',
            outline: 'none'}}></input>       

        </div>
        <button type="Submit"  disabled={!isEmailValid}className="btn-next">
          Next
        </button>

        {errorMessage && (
        <p style={{ color: isEmailValid ? 'green' : 'red' }}>{errorMessage}</p>
      )}
        <h4>or</h4>
        <div className="screen">
          <Buttonform></Buttonform>
        </div>
      </div>
    </div>
  );
};

export default Signup;
