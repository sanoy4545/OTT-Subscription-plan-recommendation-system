import React, { useState } from 'react';

function Sellme() {
    const [takeData, setTakeData] = useState({ platform: "", price: "" });
    const [results, setResults] = useState([]);

    const handleSelectChange = (e) => {
        setTakeData({
            ...takeData,
            [e.target.name]: e.target.value,
        });
    };

    const giveData = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/searchpartner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(takeData),
        });
    
        const result = await response.json();
        console.log(result)
        setResults(result); // Set the fetched results in state
    }

    return (
        <div className="takerentpage">
            <h1 className="headtkrent">Find ME</h1>
            <p className="paratkrent">"Find Me a Partner" helps you connect with like-minded viewers, facilitating shared OTT platform experiences and enhancing your entertainment journey.</p>
            <div className="totalrslt">
                <form className="formname" onSubmit={giveData} >
                    <label className="platformchoose">Choose Your Platform: </label>
                    <select
                        className="platchoose"
                        name="platform"
                        id="platform"
                        value={takeData.platform}
                        onChange={handleSelectChange}
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
                        <option label="Hotstar" value="Hotstar">
                            Hotstar
                        </option>
                        <option label="AmazonPrime" value="AmazonPrime">
                            AmazonPrime
                        </option>
                        
                    </select>
                    <label className="hourschoose">Enter price: </label>
                    <input type='number' name='price' value={takeData.price} onChange={handleSelectChange} style={{backgroundColor:'rgba(53, 81, 126, 0.7)'}}></input>
                    <br />
                    <input type="submit" className="subbutton" value="Submit" />
                </form>
                <div className="verticalline4"></div>
                <div className="results">
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <div key={index} className="result-item">
                                <p>Email: {item.email ? item.email : "Data not available"}</p>
                                <p>Platform: {item.platform ? item.platform : "Data not available"}</p>
                                <p>Plan: {item.plan ? item.plan : "Data not available"}</p>
                                <p>Half: {item.split ? item.split : "Data not available"}</p>
                            </div>
                        ))
                    ) : (
                        <p>No Results Available</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sellme;
