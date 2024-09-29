import React from "react";
import "./Login.css";
import imgg1 from "../components/images/spotify.png";
import Buttonform from "./Buttonform";
import Auth from "./Auth";

const loginform = (props) => {
  return (
    <div className="form">
      <div className="container-box">
        <div className="from-data">
          <img src={imgg1} alt="err"></img>
          <h2>Login to Spotify</h2>
          <Buttonform></Buttonform>
        </div>
        <Auth></Auth>
      </div>
       
    </div>
  );
};

export default loginform;
