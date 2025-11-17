import React from "react";
import walls from "../assets/wallpanel.jpg";

import "./walls.css"; 

const Walls = () => {
  return (

    <div className="wall-panel-card">
      <div className="wall-panel-image">
        <img src={walls} alt="Wall Panels" />
      </div>
    </div>
    
  );
};

export default Walls;
