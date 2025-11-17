import React from "react";

import men1 from "../assets/men1.png";
import men2 from "../assets/men2.png";
import hair from "../assets/hairmen.png";
import facial from "../assets/facialmen.png";
import pedicure from "../assets/pedicuremen.png";
import "./Salon.css";
import Wal from "../components/Wal.jsx"

const spaServices = [
  { title: "Stress relief", img: men1 },
  { title: "Pain relief", img: men2 },
];

const salonServices = [
  { img: facial, title: "Haircut" },
  { img: hair, title: "Cleanup" },
  { img: pedicure, title: "Pedicure" },
];

const SpaSalon = () => {
  return (
    <>
      {/* Spa for Men */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for Men</h2>
        <p className="spa-sub">Refresh. Rewind. Rejuvenate.</p>

        <div className="spa-cards">
          {spaServices.map((item, index) => (
            <div key={index} className="spa-card">
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Wal/>

      {/* Salon for Women */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Salon for Men</h2>

        <div className="spa-cards">
          {salonServices.map((item, index) => (
            <div key={index} className="spa-card">
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpaSalon;
