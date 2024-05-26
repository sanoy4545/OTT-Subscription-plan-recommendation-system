import React, { useState } from "react";
import Navbar from "../homepage/Navbar/Navbar";
import "./giverentstyle.css";
import fimg from "./image.jpg";
import "./giverentstyle.css";

function Giverent() {
  const [formData, setFormData] = useState({
    password: "",
    userId: "",
    platform: "",
    price: "",
    plan: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    userId: "",
    platform: "",
    price: "",
  });

  const [buttonText, setButtonText] = useState("Click");

  async function sendFunction() {
    console.log(formData);
    // Check for errors before sending the data
    if (!validateForm()) {
      return;
    }

    try {
      const result = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const set1 = await result.json();

      // Handle the response as needed
      console.log('Response from backend:', set1);

      // Update button text to "Success" upon successful form submission
      setButtonText("Success");
    } catch (error) {
      console.error('Error sending data:', error);
      setButtonText("Failed");
    }
  }

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Check each field
    Object.entries(formData).forEach(([key, value]) => {
      if (value === "") {
        newErrors[key] = "Please fill out this field";
        valid = false;
      }
    });

    // Update the error state
    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="giverentpage">
      <div className="rentpagetext">
        <div className="renthead">
          Start Renting your <b>OTT</b> platform now.
        </div>
        <div className="rentpara">
          <p>
          The "Give Rent" feature enables you to rent out your OTT Platform to other users, allowing you to share your collection and earn from it. This creates a community-driven library where everyone can access and enjoy a wider range of films.
          </p>
        </div>
      </div>

      <div className="verticallinerent"></div>

      <div className="formpage">
        <div
          className="imageform"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3) ),url(${fimg})`,
          }}
        >
          <h3 className="formtext">
            RENT A SERVICE <br></br> &nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;AND <br></br> EARN WITH US
            <br></br>
          </h3>
        </div>

        <form className="formcontents">
          <h1 className="headingrent">WATCHWISE</h1>

          <label className="labelname">Userid</label>
          <input
            type="text"
            className="inputcontent"
            name="userId"
            placeholder="Please fill out this field"
            required
            value={formData.userId}
            onChange={handleChange}
          />
          <span className="error-message">{errors.userId}</span>

          <label className="labelname">Password</label>
          <input
            type="password"
            className="inputcontent"
            name="password"
            placeholder="Please fill out this field"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <span className="error-message">{errors.password}</span>

          <label className="labelname">Platform</label>
          <select
            className="inputcontent"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select platform
            </option>
            <option value="Netflix">Netflix</option>
            <option value="Amazon">Amazon</option>
            <option value="AppleTV">AppleTV</option>
            <option value="Hotstar">Hotstar</option>
          </select>
          <span className="error-message">{errors.platform}</span>

          <label className="labelname">Price/Hour</label>
          <input
            type="text"
            className="inputcontent"
            name="price"
            placeholder="Please fill out this field"
            required
            value={formData.price}
            onChange={handleChange}
          />
          <span className="error-message">{errors.price}</span>

          <label className="labelname">Plan</label>
          <input
            type="text"
            className="inputcontent"
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={sendFunction} className="btn-gr">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Giverent;
