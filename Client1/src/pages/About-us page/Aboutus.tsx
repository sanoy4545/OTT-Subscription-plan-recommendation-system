import React from "react";
import Navbar from "../homepage/Navbar/Navbar";
import "./aboutus-style.css";
function Aboutus() {
  return (
    <div className="abtusfull">
      <Navbar></Navbar>
      <div className="abttext">
        <center>
          <h1 className="abthead">Our STORY . .</h1>
          <p className="abtpara">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            facere molestiae aliquam odio sapiente nemo unde cum illum dolores
            rerum.
          </p>
        </center>
      </div>

      <div className="ustext">
        <div className="us1 l1">
          <div className="usimg1"></div>
          <div className="us1txt">
            <p>
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              necessitatibus dicta incidunt saepe illum iure alias debitis nobis
              ex! Voluptatem animi, enim ducimus et aperiam iste exercitationem
              dolorem quam maxime. '
            </p>
          </div>
        </div>

        <div className="us1 l2">
          <div className="usimg1"></div>
          <div className="us1txt">
            <p>
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              necessitatibus dicta incidunt saepe illum iure alias debitis nobis
              ex! Voluptatem animi, enim ducimus et aperiam iste exercitationem
              dolorem quam maxime. '
            </p>
          </div>
        </div>

        <div className="verticalline3"></div>

        <div className="us1 r1">
          <div className="usimg1"></div>
          <div className="us1txt">
            <p>
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              necessitatibus dicta incidunt saepe illum iure alias debitis nobis
              ex! Voluptatem animi, enim ducimus et aperiam iste exercitationem
              dolorem quam maxime. '
            </p>
          </div>
        </div>

        <div className="us1 r2">
          <div className="usimg1"></div>
          <div className="us1txt">
            <p>
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              necessitatibus dicta incidunt saepe illum iure alias debitis nobis
              ex! Voluptatem animi, enim ducimus et aperiam iste exercitationem
              dolorem quam maxime. '
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
