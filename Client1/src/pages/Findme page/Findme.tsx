import React, { useState } from "react";
const OTTOptions = {
  netflix: ["149", "199", "499", "649"],
  amazonPrime: ["299", "499", "599", "1499"],
  disneyPlus: ["299", "899", "1499"],
  hotStar: ["149", "299", "499"],
  appleTv: ["99"],
};

const OTTPlatforms = Object.keys(OTTOptions);

function Findme() {
  const [selectedOTT, setSelectedOTT] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [email, setEmail] = useState("");
  const [text,setText]=useState("")
  const [status,setStatus]=useState(false)

  const handleOTTChange = (e) => {
    setSelectedOTT(e.target.value);
    setSelectedPlan("");
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      selectedOTT,
      selectedPlan,
      email,
    };
    setText("submitted successfully")
    setStatus(true)
    console.log(data);

    // Simulating backend call
    const response = await fetch("http://127.0.0.1:5000/addpartner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    // In a real scenario, handle the API response
  };

  return (
    <div className="giverentpage">
      <div className="rentpagetext">
        <div className="renthead">
          Start Acting as a <b>Partner</b> now.
        </div>
        <div className="rentpara">
          <p>
          "Act as a Partner" feature allows others to find you based on your OTT platform preferences, fostering connections and shared viewing experiences.
          </p>
        </div>
      </div>

      <div className="verticallinerent"></div>

      <div className="formpage">
        <div
          className="imageform"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3) )`
          }}
        >
          <h3 className="formtext">
          &nbsp;&nbsp;&nbsp;&nbsp;"Discover <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;share <br></br> &nbsp;&nbsp;&nbsp;&nbsp;and enjoy  &nbsp;&nbsp;&nbsp;&nbsp;together." <br></br> &nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; <br></br> 
            <br></br>
          </h3>
        </div>

        <form className="formcontents">
          <h1 className="headingrent">WATCHWISE</h1>
          
          <label className="labelname">Email:</label>
          <input
            type="email"
            className="inputcontent"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label className="labelname">Select an OTT Platform:</label>
          <select
            className="inputcontent"
            value={selectedOTT}
            onChange={handleOTTChange}
            required
          >
            <option value="">Select</option>
            {OTTPlatforms.map((ott) => (
              <option key={ott} value={ott}>
                {ott}
              </option>
            ))}
          </select>

          {selectedOTT && (
            <><label className="labelname">Select a Plan:</label><select
              className="inputcontent"
              value={selectedPlan}
              onChange={handlePlanChange}
              required
            >
              <option value="">Select</option>
              {OTTOptions[selectedOTT].map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select></>
          )}

          <button className="btn-gr" onClick={handleSubmit}>
            Submit
          </button>
          {status && <p>{text}</p>}
        </form>
      </div>
    </div>
  );
}

export default Findme;
