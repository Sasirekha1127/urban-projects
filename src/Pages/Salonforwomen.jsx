import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import luxe from "../assets/luxe.png";
import prime from "../assets/prime.png";

import "../pages/Salonforwomen.css";

export default function SalonForWomen() {
  const navigate = useNavigate();

  return (
    <div className="sfw-overlay">
      <div className="sfw-box">

        {/* Header */}
        <div className="sfw-header">
          <IoArrowBack className="sfw-back" onClick={() => navigate(-1)} />
          <h2>Salon for Women</h2>
          <FiShare2 className="sfw-share" />
        </div>

        {/* Luxury Card */}
        <div
          className="sfw-card"
          onClick={() => navigate("/salon/luxury")}
          style={{ cursor: "pointer" }}
        >
          <img src={luxe} className="sfw-img" alt="Luxury" />
        </div>

        {/* Prime Card */}
        <div
          className="sfw-card"
          onClick={() => navigate("/salon/prime")}
          style={{ cursor: "pointer" }}
        >
          <img src={prime} className="sfw-img" alt="Prime" />
        </div>

      </div>
    </div>
  );
}
