import React from "react";
import "./featurestyle.css";
import { Link } from "react-router-dom";
import Navbar from "../homepage/Navbar/Navbar";
function Feauture() {
  return (
    <>
      <Navbar></Navbar>
      <div className="feauturepage">
        <center>
          <div className="feauturelink">
            <h1>Choose Your WISE-WATCH !</h1>
          </div>
          <div className="feauturepara">
            <p>
            WATCHWISE offers features like a recommender, partner finder, and rental service to enhance your viewing experience.
            </p>
          </div>
        </center>

        <div className="feauturebox">
          <div id="box1" className="boxeffect">
            <h2>Recommender</h2>
            <div className="ftparabox">
              <p className="ftpara">
              Suggest
personalized subscription plans from various OTT
platforms..
              </p>
            </div>
            <Link to="/Recommend">
              {/* Navigate to "/home" when clicked */}
              <button className="ftbt bt1">Recommend</button>
            </Link>
          </div>
          <div id="box1" className="boxeffect">
            <h2>Find Me </h2>
            <div className="ftparabox">
              <p className="ftpara">
              Helps user to find a partner to share the platform
increasing cost efficiency
              </p>
            </div>
            <Link to="/Option">
              {/* Navigate to "/home" when clicked */}
              <button className="ftbt bt2">Find Me</button>
            </Link>
          </div>
          <div id="box1" className="boxeffect">
            <h2>Rental</h2>
            <div className="ftparabox">
              <p className="ftpara">
              Allows users to rent out platforms

for short intervals.
              </p>
            </div>
            <Link to="/rental">
              {/* Navigate to "/home" when clicked */}
              <button className="ftbt bt3">Rental</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feauture;
