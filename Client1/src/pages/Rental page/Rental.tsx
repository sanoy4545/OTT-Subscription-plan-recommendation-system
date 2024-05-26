import React, { useEffect } from "react";
import "./rentalstyle.css";
import { Link } from "react-router-dom";
import bkg from "./back3.jpg";
import Navbar from "../homepage/Navbar/Navbar";
function Rental() {

  useEffect(() => {
    const sendData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/clear", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "hi": "value" }), // Replace with your data
            });
            const data = await response.json();
            console.log(data); // Handle response data as needed
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    sendData(); // Call the async function to send data when component mounts
}, []);







  return (
    
    <div className="fullpage">
      <div className="fullpagetext">
        <h1 className="heading">WATCHWISE</h1>
        <div className="para1">
          Start your <b>OTT</b> platform now.
        </div>
        <div className="para2">
          <p>
          Our rental service offers two features: 'Give Rent' and 'Take Rent'. 'Give Rent' allows you to rent out your OTT Platform to others, earning extra income. 'Take Rent' lets you borrow OTT Platform from others, providing access to a diverse collection. Enjoy flexibility and variety with our convenient rental options.
          </p>
        </div>
        <div className="btns">
          <Link to="/Giverent">
            {/* Navigate to "/home" when clicked */}
            <button className="rentbt" id="bt1">
              Give Rent
            </button>
          </Link>
          <Link to="/Takerent">
            {/* Navigate to "/home" when clicked */}
            <button className="rentbt" id="bt2">
              Take Rent
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
        Our rental service includes two features: give rent, where you offer your movies, and take rent, where you borrow others' films.
        </p>
      </div>
    </div>
  );
}

export default Rental;
