import React from "react";
import { Link } from "react-router-dom";
import "../Rental page/rentalstyle.css";
import bkg from "../Rental page/back3.jpg";

function Option() {
  return (
    <div className="fullpage">
      <div className="fullpagetext">
        <h1 className="heading">WATCHWISE</h1>
        <div className="para1">
          Find or Act as a <b>Partner</b>.
        </div>
        <div className="para2">
          <p>
          The "Find a Partner" feature helps you find a suitable companion, while the "Act as a Participant" feature allows you to actively engage in various activities, enhancing social interaction and networking opportunities.
          </p>
        </div>
        <div className="btns">
          <Link to="/Findme">
            {/* Navigate to "/home" when clicked */}
            <button className="rentbt" id="bt1">
              Add Me
            </button>
          </Link>
          <Link to="/Sellme">
            {/* Navigate to "/home" when clicked */}
            <button className="rentbt" id="bt2">
              Find Me
            </button>
          </Link>
        </div>
      </div>
      <div className="verticalline2"></div>

      <div
        className="movieimage"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url(${bkg})`,
        }}
      >
        <h1 className="bannerhead">
          Lend Or Rent Your OTT<br></br>
        </h1>
        <p className="bannertext">
        The feature helps us find a partner and allows us to participate actively
        </p>
      </div>
    </div>
  );
}

export default Option;
