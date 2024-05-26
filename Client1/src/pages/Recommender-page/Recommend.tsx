import React, { useState } from "react";
import "./recommendstyle.css";

function Recommend() {
  const [getData, setGetData] = useState({
    budget: "",
    language: [],
    genre: [],
  });

  const [responseData, setResponseData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setGetData((prevState) => {
        const updatedList = prevState[name].includes(value)
          ? prevState[name].filter((item) => item !== value)
          : [...prevState[name], value];
        return { ...prevState, [name]: updatedList };
      });
    } else {
      setGetData({
        ...getData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(getData);

    try {
      const result = await fetch("http://127.0.0.1:5000/recomm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getData),
      });

      const data = await result.json();

      // Log the received data to check the response
      console.log('Data received from backend:', data);

      // Only set response data if it is valid
      if (data && (Array.isArray(data) || typeof data === "object")) {
        setResponseData(Array.isArray(data) ? data : [data]);
      } else {
        console.error('Invalid data format received:', data);
        setResponseData([]);
      }
    } catch (error) {
      console.error('Error fetching data from backend:', error);
      setResponseData([]);
    }
  };

  return (
    <div className="recommendation-form">
      <h2 className="recommendhead">Movie Recommendation</h2>
      <p className="recommendpara">
      The movie recommender suggests films based on your preferences.
      </p>
      <div className="totalbox">
        <form onSubmit={handleSubmit} className="totalopbox">
          <h4 className="headingrec">WATCHWISE</h4>
          <div className="text-box">
            <h2 className="recq1">Choose your budget?</h2>
            <select
              className="hidden"
              name="budget"
              value={getData.budget}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                choose your price
              </option>
              <option value="Below 100">Below 100</option>
              <option value="Below 150">Below 150</option>
              <option value="Below 200">Below 200</option>
              <option value="Below 300">Below 300</option>
              <option value="Below 500">Below 500</option>
              <option value="Below 600">Below 600</option>
              <option value="Below 1000">Below 1000</option>
              <option value="Below 1500">Below 1500</option>
            </select>
          </div>

          <div className="text-box">
            <h2 className="recq2">Preferred Language?</h2>
            {["ENGLISH", "MALAYALAM", "HINDI", "TAMIL"].map((language) => (
              <div key={language} className="langbox">
                <label className="lang1">{language}</label>
                <input
                  className="hiddencheck"
                  name="language"
                  type="checkbox"
                  value={language}
                  checked={getData.language.includes(language)}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="text-box">
            <h2 className="recq3">Your Genre?</h2>
            {[
              "ROMANCE",
              "COMEDY",
              "HORROR",
              "THRILLER",
              "SCI-FI",
              "KIDS/FAMILY",
            ].map((genre) => (
              <div key={genre} className="langbox">
                <label className="lang1">{genre}</label>
                <input
                  className="hiddencheck"
                  name="genre"
                  type="checkbox"
                  value={genre}
                  checked={getData.genre.includes(genre)}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <button className="small-button" type="submit">
            Search
          </button>
        </form>
        <div className="movieans">
          <h1 className="headingrec1">What we Recommend You</h1>
          {responseData.length > 0 && (
            <div className="response-data">
              {responseData.map((item, index) => (
                <div key={index} className="movie-item">
                  <h2>Movies: {item.movies}</h2>
                  <h2>Plan: {item.plan}</h2>
                  <h2>Platform: {item.platform}</h2>
                  <h2>Price: {item.price}</h2>
                  <h2>Screens: {item.screens}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recommend;
