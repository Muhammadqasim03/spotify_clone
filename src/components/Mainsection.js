import React from "react";
import "./Mainsection.css";

import img3 from "../components/images/abc3.jpg";
import img4 from "../components/images/abc4.jpg";
import playmusic from "../components/images/play-solid.svg";

export default function Mainsection() {
  const Cardlist = [
    {
      Image: require("../components/images/abc1.jpg"),
      name: "Priam",
      title: "Artist",
    },
    {
      Image:  require("../components/images/abc1.jpg"),
      name: "Priam",
     
      title: "Artist",
    },
    {
      
      Image:  require("../components/images/abc1.jpg"),
      name: "Pritam",
      title: "Artist",
    },
    {
      
      Image:  require("../components/images/abc1.jpg"), 
      name: "Pritam",
      title: "Artist",
    },
  ];
  

  return (
    <div className="main-section">
      <div className="PopularArtist">
        <div className="btn-btn">
          <button>All</button>
          <button>Music</button>
          <button>Podcasts</button>
        </div>
        <h2>Popular Artists</h2>
        <div class="card">
          {Cardlist.map((e, index) => (
            <div class="item">
              <img className="imggg" src={e.Image} alt="err"/>
              <div className="play-music">
                {" "}
                <img src={playmusic} alt="err"></img>
              </div>
              <h4>{e.name}</h4>
              <p>{e.title}</p>
            </div>
          ))}

        </div>
      </div>
      <div className="Popularalbum">
        <h2>Popular album</h2>
        <div class="card">
          <div class="item">
            <img className="imgg" src={img4} alt="err"></img>
            <h4>jhol</h4>
            <p>Maanu,Annural khalid</p>
          </div>
          <div class="item">
            <img className="imgg" src={img4} alt="err"></img>
            <h4>Pritam</h4>
            <p>Artist</p>
          </div>
          <div class="item">
            <img className="imgg" src={img4} alt="err"></img>
            <h4>ROCKSTART WITHOUT A GUITAR</h4>
            <p>UMAIR</p>
          </div>
          <div class="item">
            <img className="imgg" src={img4} alt="err"></img>
            <h4>Still Rollin</h4>
            <p>Shubh</p>
          </div>
          <div class="item">
            <img className="imgg" src={img4} alt="err"></img>
            <h4>Making Memories</h4>
            <p>Karan Aujla</p>
          </div>
        </div>
      </div>
      <div className="Popularradio">
        <h2>Popular radio</h2>
        <div class="card">
          <div class="item">
            <img className="imgg" src={img3} alt="err"></img>
            <h4>With Neha Kakkar,</h4>
            <p>Pritam ,KK and more</p>
          </div>
          <div class="item">
            <img className="imgg" src={img3} alt="err"></img>
            <h4>With AP Dhillon</h4>
            <p>Gurinder Gill</p>
          </div>
          <div class="item">
            <img className="imgg" src={img3} alt="err"></img>
            <h4>With Abida Parveen</h4>
            <p>Atta Ullah Khan..</p>
          </div>
          <div class="item">
            <img className="imgg" src={img3} alt="err"></img>
            <h4>With Gurinder Gill</h4>
            <p>Subh,Shinda Khan</p>
          </div>
          <div class="item">
            <img className="imgg" src={img3} alt="err"></img>
            <h4>Making Memories</h4>
            <p>Karan Aujla</p>
          </div>
        </div>
      </div>
    </div>
  );
}
