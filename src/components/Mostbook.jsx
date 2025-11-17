import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import most1 from "../assets/most1.png";
import most2 from "../assets/most2.png";
import most3 from "../assets/most3.png";
import most4 from "../assets/most4.png";
import most5 from "../assets/most5.png";
import most6 from "../assets/most6.png";
import "../components/Mostbook.css";

const MostBooked = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mostBooked = [
    { img: most1, text: "Intense bathroom cleaning", rating: 4.9, reviews: "3.5M", price: "₹449" },
    { img: most2, text: "Intense cleaning (2 bathrooms)", rating: 4.49, reviews: "3.5M", price: "₹1200" },
    { img: most3, text: "Haircut for men", rating: 4.7, reviews: "471k", price: "₹299" },
    { img: most4, text: "Chimney cleaning", rating: 4.6, reviews: "1.8M", price: "₹399" },
    { img: most5, text: "Intense cleaning (3 bathrooms)", rating: 4.3, reviews: "333k", price: "₹1200" },
    { img: most6, text: "Roll-on waxing (full arms, legs & underarms)", rating: 4.4, reviews: "155k", price: "₹899" },
  ];

  const visibleCount = 3; // desktop: 3 visible

  const handleNext = () => {
    if (currentIndex < mostBooked.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mostbooked-wrapper">
      <h2 className="mostbooked-heading">Most Booked Services</h2>

      <div className="mostbooked-carousel">

        {currentIndex > 0 && (
          <button className="mostbooked-arrow left" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
        )}

        <div
          className="mostbooked-track"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {mostBooked.map((item, i) => (
            <div key={i} className="mostbooked-item">
              <img src={item.img} alt={item.text} />
              <p className="mostbooked-text">{item.text}</p>
              <p className="mostbooked-rating">
                ⭐ {item.rating} ({item.reviews})
              </p>
              <p className="mostbooked-price">{item.price}</p>
            </div>
          ))}
        </div>

        {currentIndex < mostBooked.length - visibleCount && (
          <button className="mostbooked-arrow right" onClick={handleNext}>
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default MostBooked;
