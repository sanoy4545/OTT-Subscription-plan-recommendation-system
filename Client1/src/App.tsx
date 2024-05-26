import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/loginpage/Login";
import Home from "./pages/homepage/Home";
import Feauture from "./pages/Feauture Page/Feauture";
import Rental from "./pages/Rental page/Rental";
import Aboutus from "./pages/About-us page/Aboutus";
import Giverent from "./pages/Give-Rent page/Giverent";
import Takerent from "./pages/TakeRent page/Takerent";
import Paymentpage from "./pages/PaymentPage/Paymentpage";
import Paymentop from "./pages/Paymentop page/Paymentop";
import './App.css'
import Recommend from "./pages/Recommender-page/Recommend";
import Findme from "./pages/Findme page/Findme";
import Option from "./pages/Optionfindoract page/Option";
import Sellme from "./pages/Sellme page/Sellme";
//import NotFound from "./pages/NotFound"; // Create a NotFound component for handling 404 errors

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/feauture" element={<Feauture />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Giverent" element={<Giverent />} />
        <Route path="/Takerent" element={<Takerent />} />
        <Route path="/Paymentpage" element={<Paymentpage />} />
        <Route path="/Paymentop" element={<Paymentop />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/Findme" element={<Findme />} />
        <Route path="/Option" element={<Option />} />
        <Route path="/Sellme" element={<Sellme />} />
        {/* <Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
