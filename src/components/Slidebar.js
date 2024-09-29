import React from "react";
import "./Slidebar.css";

import img1 from "../components/images/spotify.png";
import img2 from "../components/images/house-solid.svg";
import img3 from "../components/images/magnifying-glass-solid.svg";
import Navbar from "./Navbar";
import Mainsection from "./Mainsection";

export default function Slidebar({cardlist}) {
  return (
    <div className="main-div">
      <div className="slidebar">
        <div className="slider-menu">
            <div className="spotify">
              <img src={img1} alt="err"></img>
              Spotify
            </div>
            <ul>
              <li> <img src={img2}alt="err"/>
               Home
              </li>
              <li > <img src={img3} alt="err"/>Search</li>
            </ul>   
        </div>
        <div className="playlist">
          <div className="library">
            Your Library
            <div className="sign">+</div>
          </div>
          <div className="sidebar-scroll">
            <h4>Create Your first Library</h4>
            <p> Its Easy help You </p>
            <button className="btn-playlist">Create playlist</button>
          </div>

          <div className="privacy">
            <ul>
              <li>Legal</li>
              <li>Safety & privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content">
        <Navbar></Navbar>
       <Mainsection ></Mainsection>
       
      </div>
    </div>
  );
}
