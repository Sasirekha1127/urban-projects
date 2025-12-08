import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";

import luxe from "../assets/luxe.png";
import prime from "../assets/prime.png";

import "../pages/Salonforwomen.css"; 

export default function SalonForWomen() {
  return (
    <div className="sfw-overlay">
      <div className="sfw-box">

        {/* Header */}
        <div className="sfw-header">
          <IoArrowBack className="sfw-back" />
          <h2>Salon for Women</h2>
          <FiShare2 className="sfw-share" />
        </div>

        {/* Luxury Card */}
        <div className="sfw-card">
          <img src={luxe} className="sfw-img" alt="Luxury" />

          {/* <div className="sfw-info">
            <span className="sfw-tag sfw-luxury">LUXURY</span>
            <h3>Ainhoa | Casmara | Cirépil</h3>
          </div> */}
        </div>

        {/* Prime Card */}
        <div className="sfw-card">
          <img src={prime} className="sfw-img" alt="Prime" />

          {/* <div className="sfw-info">
            <span className="sfw-tag sfw-premium">PREMIUM</span>
            <h3>Rica | Inveda | O3+</h3>
          </div> */}
        </div>

      </div>
    </div>
  );
}
