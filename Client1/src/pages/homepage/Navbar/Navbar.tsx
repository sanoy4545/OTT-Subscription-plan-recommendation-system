import React from "react";
import "./navbarstyle.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="menudisplay ">
      <span className="logo-container">
        <p id="page-logo">WATCHWISE</p>
      </span>

      <span className="menu">
        <Link to="/Home">
          {/* Navigate to "/home" when clicked */}
          <a href="#" className="menuitems">
            Home
          </a>
        </Link>

        <Link to="/Aboutus">
          {/* Navigate to "/home" when clicked */}
          <a href="#" className="menuitems">
            About Us
          </a>
        </Link>

        <Link to="/feauture">
          {/* Navigate to "/home" when clicked */}
          <a href="#" className="menuitems">
            Plans
          </a>
        </Link>
      </span>

      <Link to="/">
        {/* Navigate to "/home" when clicked */}
        <a href="#" className="signin">
          Sign In
        </a>
      </Link>
    </div>
  );
}

export default Navbar;
