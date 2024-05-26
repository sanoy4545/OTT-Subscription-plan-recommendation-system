import React from "react";
import "./bannerstyle.css";
import { Link } from "react-router-dom";
import Mlist from "./Mlist";
import netflix from "./netflix-final.png";
import amazon from "./amazon-prime1.png";
import apple from "./apple-tv.png";
import disney from "./Disney-removebg-preview.png";
function Banner() {
  return (
    <div className="finalBanner">
      <span className="fullbanner">
        <span className="bannerclass">
          <h1 className="bannertxt">
            Your go-to guide on <b>OTT Platforms & Subscription in India .</b>
          </h1>
        </span>

        <div className="bannerpara">
          <center>
            <p>
              <b>WATCHWISE </b>helps the users find tailored subscription plans,
              connect with partners for shared access, and facilitate platform
              rentals.We fosters collaboration and resource-sharing in the
              digital entertainment landscape and empowers users to enjoy
              premium content while maximizing cost efficiency and social
              connections.
            </p>
          </center>
        </div>
        <Link to="/feauture">
          {/* Navigate to "/home" when clicked */}
          <button className="loginstart">Get Started</button>
        </Link>

        <div className="bannerbtn"></div>
      </span>
      <div className="verticalline"></div>
      <div className="movies">
        <h2 className="movieheading">' Our Top Partners '</h2>
        <Mlist imageIcon={netflix}></Mlist>
        <Mlist imageIcon={amazon} left="35px"></Mlist>
        <Mlist imageIcon={apple} left="20px"></Mlist>
        <Mlist imageIcon={disney} left="35px"></Mlist>
      </div>
    </div>
  );
}

export default Banner;
