import React from "react";
import { useNavigate } from "react-router-dom";

import wax from "../assets/salon1.png";
import cleanup from "../assets/salon2.png";
import haircare from "../assets/salon3.png";

import stress from "../assets/spa1.png";
import pain from "../assets/spa2.png";

import "./Salon.css";

const SalonSpa = () => {
  const navigate = useNavigate(); // 👈 React Router hook

  // SALON SERVICES
  const salonServices = [
    { img: wax, title: "Waxing" },
    { img: cleanup, title: "Cleanup" },
    { img: haircare, title: "Hair care" },
  ];

  // SPA SERVICES
  const spaServices = [
    { title: "Stress relief", img: stress },
    { title: "Pain relief", img: pain },
  ];

  return (
    <>
      {/* SALON SECTION */}
      <div className="salon-wrapper">
        <h2 className="salon-heading">Salon for Women</h2>

        <div className="salon-cards">
          {salonServices.map((item, index) => (
            <div
              key={index}
              className="salon-card"
              onClick={() => navigate(`/salon/${item.title.toLowerCase()}`)} 
              style={{ cursor: "pointer" }}
            >
              <img src={item.img} alt={item.title} />
              <p className="salon-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SPA SECTION */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for Women</h2>
        <p className="spa-sub">Refresh. Rewind. Rejuvenate.</p>

        <div className="spa-cards">
          {spaServices.map((item, index) => (
            <div
              key={index}
              className="spa-card"
              onClick={() => navigate(`/spa/${item.title.toLowerCase().replace(/\s+/g, "-")}`)} // 👈 click navigation
              style={{ cursor: "pointer" }}
            >
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SalonSpa;
