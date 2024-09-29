import React from "react";
import "./Auth.css";
const Auth = () => {
  return (
    <div className="auth">
      <h1>Email or username</h1>
      <input type="text" value="Email or username "></input>
      <h1 className="password">Password</h1>
      <input type="" value="password"></input>
      <div className="optional-btn">
        <div className="loginbtn">
          <button type="button" className="">
            Log In
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Auth;
