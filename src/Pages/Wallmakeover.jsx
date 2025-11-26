// src/Pages/Walldecoration.jsx
import React, { useEffect, useState } from "react";
import "./Wallmakeover.css"; 

import innerwall1 from "../assets/innerwall1.png";
import innerwall2 from "../assets/innerwall2.png";
import innerwall3 from "../assets/innerwall3.png";

const wallImages = [innerwall1, innerwall2, innerwall3];

export default function WallDecoration({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHideNavbar(true); // hide navbar during loading
    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false); // show navbar after loading
    }, 2000);
    return () => clearTimeout(timer);
  }, [setHideNavbar]);

  return (
    <div className="native-container">
      {loading ? (
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <div className="wall-content">
          <h2 className="wall-heading">Wall Decoration Ideas</h2>
          <div className="wall-images">
            {wallImages.map((img, index) => (
              <div key={index} className="wall-image-card">
                <img src={img} alt={`Wall ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
