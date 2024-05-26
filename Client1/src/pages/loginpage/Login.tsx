import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [getData, setGetData] = useState({
    email: "",
    password: "",
  });
  const [buttonText, setButtonText] = useState("Validate");
  const [isValidated, setIsValidated] = useState(false);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      // Handle success response from the backend
      if (result.log === "success") {
        setButtonText("Validation successful");
        setIsValidated(true);
        // Navigate to the home page after successful validation
      } else {
        setButtonText("Validation failed");
        setIsValidated(false);
      }
    } catch (error) {
      // Handle error response from the backend
      console.error("There was a problem with the fetch operation:", error);
      setButtonText("Validation failed");
      setIsValidated(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="logo">WATCHWISE</h1>

      <div className="login">
        <h1 className="login__title">Sign In</h1>

        <div id="email">
          <input
            type="email"
            name="email"
            pattern="[^ @]*@[^ @]*"
            placeholder="Email or phone number"
            className="login__group__input"
            value={getData.email}
            onChange={handleInputChange}
          />
        </div>

        <div id="password">
          <input
            type="password"
            name="password"
            className="login__group__input"
            placeholder="Password"
            value={getData.password}
            onChange={handleInputChange}
          />
        </div>

        <button className="login__sign-in" onClick={handleSubmit}>
          {buttonText}
        </button>

        {isValidated && (
          <Link to="/home">
            <button className="login__sign-in">Sign In</button>
          </Link>
        )}

        <div className="forgotpass">
          <p>OR</p>
          <a href="#" className="forgottext">
            Forgot password?
          </a>
        </div>

        <div>
          <input type="checkbox" className="checkme" />
          <a href="#"> Remember me</a>
        </div>

        <div className="form-text">
          <p>
            New to WatchWise?{" "}
            <Link to="/signin">
              <a href="#" className="signup">
                Sign up now.
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
