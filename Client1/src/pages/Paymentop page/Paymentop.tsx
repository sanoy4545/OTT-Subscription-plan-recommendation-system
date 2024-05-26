import React, { useState, useEffect } from 'react';
import './paymentstyle.css';
import { Link } from 'react-router-dom';

function Paymentop() {
    const [fetchStatus, setFetchStatus] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/final");
                const data = await response.json();
                if (data[0].status === "success") {
                    setFetchStatus('success');
                } else {
                    setFetchStatus('failed');
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setFetchStatus('failed');
            }
        };
        fetchData();
    }, []);

    const handleWatchNow = async () => {
        const response = await fetch("http://127.0.0.1:5000/watch", {
             method: 'POST',
             body: JSON.stringify({ 'hi': "hello" }),
             headers: {
                 'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result)
    };

    const handleGoHome = () => {
        // Navigate to the home page or handle going home
    };

    return (
        <div className='payment-container'>
            <div className='guidelines'>
                <h1 className='guidelines-header'>GUIDELINES</h1>
                <ul className='guidelines-list'>
                    <li>If payment was unsuccessful, retry the transaction from the home page.</li>
                    <li>Do not manually close the automated browser; it will close automatically after a stipulated time.</li>
                    <li>Do not log out from the rented platform manually.</li>
                    <li>For any inquiries, contact watchwise@gmail.com.</li>
                </ul>
            </div>
           
            {fetchStatus === 'success' &&<Link to='/Home'><button className='watch-button' onClick={handleWatchNow}>Watch Now</button></Link>}
            {fetchStatus === 'failed' && <Link to='/Rental'><button className='home-button' onClick={handleGoHome}>Go Home</button></Link>}

            {fetchStatus === 'success' && <p className='payment'>Payment Successfull</p>}
            {fetchStatus === 'failed' && <p className='payment'>Payment failed</p>}
        </div>
    );
}

export default Paymentop;
