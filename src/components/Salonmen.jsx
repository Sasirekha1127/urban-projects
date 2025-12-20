import React from "react";
import { useNavigate } from "react-router-dom";

import men1 from "../assets/men1.png";
import men2 from "../assets/men2.png";
import hair from "../assets/hairmen.png";
import facial from "../assets/facialmen.png";
import pedicure from "../assets/pedicuremen.png";
import "./Salon.css";
import Wal from "../components/Wal.jsx";

const spaServices = [
  { title: "Stress relief", img: men1, path: "/spa/stress" },
  { title: "Pain relief", img: men2, path: "/spa/pain" },
];

const salonServices = [
  { img: facial, title: "Haircut", path: "/salon/haircut" },
  { img: hair, title: "Cleanup", path: "/salon/cleanup" },
  { img: pedicure, title: "Pedicure", path: "/salon/pedicure" },
];

const SpaSalon = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Spa for Men */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for Men</h2>
        <p className="spa-sub">Refresh. Rewind. Rejuvenate.</p>

        <div className="spa-cards">
          {spaServices.map((item, index) => (
            <div
              key={index}
              className="spa-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(item.path)}
            >
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Wal />

      {/* Salon for Men */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Salon for Men</h2>

        <div className="spa-cards">
          {salonServices.map((item, index) => (
            <div
              key={index}
              className="spa-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(item.path)}
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

export default SpaSalon;
