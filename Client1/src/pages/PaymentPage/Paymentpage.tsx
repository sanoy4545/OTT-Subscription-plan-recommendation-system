import React, { useState, useEffect } from "react";
import "./paymentstyle.css";
import { Link } from "react-router-dom";

function Paymentpage() {
  const [payData, setPayData] = useState({
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [price, setPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/price");
        const data = await response.json();
        setPrice(data[0].Amount);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };

    fetchPrice();
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setPayData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(payData);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await fetch("http://127.0.0.1:5000/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payData),
    });
    const set1 = await result.json();
    console.log(set1);
  };

  return (
    <div className="payment">
      <h1 className="payhead">Pay Me Here</h1>
      <p className="paypara">
    
      </p>
      <form className="credit-card" onSubmit={handleSubmit}>
        <div className="form-header">
          <h4 className="title">Credit card detail</h4>
        </div>

        <div className="form-body">
          <input
            type="number"
            className="card-number"
            name="cardNumber"
            placeholder="Card Number"
            required
            value={payData.cardNumber}
            onChange={handleChange}
          ></input>

          <div className="date-field">
            <div className="month">
              <select
                name="month"
                value={payData.month}
                onChange={handleChange}
                className="month-select"
                required
              >
                <option value="">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div className="year">
              <select
                name="year"
                value={payData.year}
                onChange={handleChange}
                className="year-select"
                required
              >
                <option value="">Year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
            </div>
          </div>

          <div className="card-verification">
            <div className="cvv-input">
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={payData.cvv}
                required
                onChange={handleChange}
              ></input>
            </div>
            <div className="cvv-details">
              <p>
                3 or 4 digits usually found <br></br> on the signature strip
              </p>
            </div>
          </div>

          <div className="price-display">
            <h4 style={{ color: "white" }}>Total Price: ${price}</h4>
          </div>

          <button type="submit" className="proceed-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitted" : "Proceed"}
          </button>
          <Link to="/Paymentop">
            <button type="button" className="paypal-btn">
              Check Status
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Paymentpage;