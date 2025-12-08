import React, { useState } from "react";
import logo from "../assets/logo.png"; 
import "../Pages/BathroomCleaningPage.css";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import LocationBox from "../components/LocationBox.jsx"; 


export default function MiniHeader() {
  const [showLocationBox, setShowLocationBox] = useState(false);

  return (
    <div className="mini-header">
      <div className="mini-header-right">
        <img src={logo} alt="Logo" className="mini-logo" />
      </div>

      <div className="mini-header-center">
        <div className="location-box-wrapper">
          <SlLocationPin className="location-icon" />
          <input
            type="text"
            placeholder="Cnnought Place, New..."
            className="location-boxs"
            readOnly
          />
          <IoIosArrowDown
            className="arrow-icon"
            onClick={() => setShowLocationBox(true)}    
          />
        </div>

        <div className="search-box-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for services"
            className="search-boxs"
          />
        </div>
      </div>

      {/* Show the LocationBox modal */}
      <LocationBox
        show={showLocationBox}
        handleClose={() => setShowLocationBox(false)}
      />
    </div>
  );
}
