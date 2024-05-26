import React, { useState } from "react";
import "./takerentstyle.css";
import { Link, useNavigate } from "react-router-dom";

function Takerent() {
  const [takeData, setTakeData] = useState({ platform: "", hours: "",password:"",userid:"" });
  const [putData, setPutData] = useState<any[]>([]);
  const [newData, setNewData] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSelectChange = (e: { target: { name: string; value: any; }; }) => {
    setTakeData({
      ...takeData,
      [e.target.name]: e.target.value,
    });
  };

  const giveData = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent page refresh

    const result = await fetch("http://127.0.0.1:5000/takerent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(takeData),
    });

    const set1 = await result.json();
    setPutData(set1);
    console.log(set1)

    if (set1.length === 0) {
      setPutData([0]);
    }
  };

  const handlePayMeClick = async (item: any) => {
    const hr = parseInt(takeData.hours);
    takeData.platform=item.Platform;
    takeData.password=item.Pass;
    takeData.userid=item.userid;
    const totalPrice = item.Price * hr;
    setNewData(totalPrice);
    console.log(newData);

    // Send newData to the backend
    const dataToSend = { ...takeData, totalPrice: totalPrice };
    console.log(dataToSend)
    const result=await fetch("http://127.0.0.1:5000/paymenttable", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });
    const set1 = await result.json();
    // Navigate to the Paymentpage with the state
    navigate("/Paymentpage", { state: { putData: item, totalPrice: totalPrice } });
  };

  return (
    <div className="takerentpage">
      <h1 className="headtkrent">Take Rent</h1>
      <p className="paratkrent"> The "Take Rent" feature allows you to borrow OTT Platforms from other users, providing a wide variety of entertainment to enjoy.</p>
      <div className="totalrslt">
      <form onSubmit={giveData} className="formname">
        <label className="platformchoose">Choose Your Platform: </label>
        <select 
          className="platchoose"
          name="platform"
          id="platform"
          onChange={handleSelectChange}
          value={takeData.platform}
          required
        >
          <option value="" disabled>
            Choose your platform
          </option>
          <option label="Netflix" value="Netflix">
            Netflix
          </option>
          <option label="AppleTv" value="AppleTv">
            AppleTv
          </option>
          <option label="All" value="All">
            All
          </option>
        </select>

        <label className="hourschoose">Choose the no. of hours: </label>
        <select
          name="hours"
          id="hours"
          onChange={handleSelectChange}
          value={takeData.hours}
          className="selectplat"
          required
        >
          <option value="" disabled>
            Choose the number of hours
          </option>
          <option label="1 hour" value="1">
            1 hour
          </option>
          <option label="2 hours" value="2">
            2 hours
          </option>
          <option label="3 hours" value="3">
            3 hours
          </option>
          <option label="4 hours" value="4">
            4 hours
          </option>
          <option label="5 hours" value="5">
            5 hours
          </option>
        </select>

        <br />
        <input type="submit" className="subbutton" value="Submit" />
  
      </form>
      <div className="verticalline4"></div>
      <div className="results">
        <h1 className="tkhd">What we offer you</h1>
        {putData.length > 0 ? (
          putData.map((item, index) => (
            <div key={index} className="result-item">
              <h3>Platform: {item.Platform ? item.Platform : "Data not available"}</h3>
              <h3>Price / hr: {item.Price ? item.Price : "Data not available"}</h3>
        
              <button
                onClick={() => handlePayMeClick(item)}
                className="rentbtn"
              >
                Pay
              </button>
            </div>
          ))
        ) : (
          <p>No Data Available</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default Takerent;
