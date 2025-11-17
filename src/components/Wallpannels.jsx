// src/components/WallPanel.jsx
import React from "react";
import wall3 from "../assets/wall3.png";
import "./walls.css";

const WallPanel = () => {
  return (
    <div className="wall-panel-card">
      <div className="wall-panel-image">
        <img src={wall3} alt="Wall Panels" />
      </div>
    </div>
    
  );
};

export default WallPanel;
