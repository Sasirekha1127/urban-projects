import React from "react";
import wall2 from "../assets/wallpanel2.png"
import "../components/Walls.css";


const Walls = () => {
  return (
    <div className="wall-panel-card">
      <div className="wall-panel-image">
        <img src={wall2} alt="Wall Panels" />
      </div>
    </div>
    
  );
};
export default Walls