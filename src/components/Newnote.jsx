import React, { useState } from "react";
import furniture from "../assets/furniture.jpg";
import wall from "../assets/wallmakeover.jpg";
import smartlock from "../assets/smartlocks.jpg";
import water from "../assets/waterpurifier.png";
import kitchcleaning from "../assets/kitchen-cleaning.jpg";
import laptop from "../assets/laptop.jpg";
import "../components/Newnote.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Newnote = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { img: furniture, text: "Furniture Wood Polish" },
    { img: water, text: "Native Water Purifier" },
    { img: wall, text: "Wall makeover by Rewamp" },
    { img: smartlock, text: "Native Smart Lock" },
    { img: kitchcleaning, text: "Kitchen Cleaning" },
    { img: laptop, text: "Laptop" },
  ];

  // How many items visible in desktop
  const visibleCount = 3;

  const handleNext = () => {
    if (currentIndex < images.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="newnote-wrapper">
      <h2 className="newnote-heading">New & Noteworthy</h2>

      <div className="newnote-carousel">

        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button className="newnote-arrow left" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
        )}

        {/* Image Track */}
        <div
          className="newnote-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {images.map((item, i) => (
            <div key={i} className="newnote-item">
              <img src={item.img} alt={item.text} />
              <p className="newnote-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {currentIndex < images.length - visibleCount && (
          <button className="newnote-arrow right" onClick={handleNext}>
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Newnote;
