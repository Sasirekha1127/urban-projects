import React from "react";

import homes from "../assets/homes.png";
import kitchen from "../assets/kitchendeep.png";
import bathroomfull from "../assets/bathroomfull.png";
import sofa from "../assets/sofa.png";

import "./cleaningpest.css";

const CleaningPest = () => {
  // Cleaning & Pest Control Data
  const cleaning = [
    { img: homes, title: "Full Home/Move in Cleaning" },
    { img: bathroomfull, title: "Bathroom Cleaning" },
    { img: kitchen, title: "Kitchen Cleaning" },
    { img: sofa, title: "Sofa & Carpet Cleaning" },
  ];

  return (
    <div className="cleaning-wrapper">
      <h2 className="cleaning-heading">Cleaning & Pest Control</h2>

      <div className="cleaning-cards">
        {cleaning.map((item, index) => (
          <div key={index} className="cleaning-card">
            <img src={item.img} alt={item.title} />
            <p className="cleaning-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningPest;
