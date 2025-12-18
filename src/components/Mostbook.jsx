import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "../components/Mostbook.css";

import most1 from "../assets/most1.png";
import most2 from "../assets/most2.png";
import most3 from "../assets/most3.png";
import most4 from "../assets/most4.png";
import most5 from "../assets/most5.png";
import most6 from "../assets/most6.png";

const MostBookedCustomCarousel = () => {
  const trackRef = useRef(null);

  const cards = [
    { img: most1, text: "Intense bathroom cleaning", rating: 4.9, reviews: "3.5M", price: "₹449" },
    { img: most2, text: "Intense cleaning (2 bathrooms)", rating: 4.49, reviews: "3.5M", price: "₹1200" },
    { img: most3, text: "Haircut for men", rating: 4.7, reviews: "471k", price: "₹299" },
    { img: most4, text: "Chimney cleaning", rating: 4.6, reviews: "1.8M", price: "₹399" },
    { img: most5, text: "Intense cleaning (3 bathrooms)", rating: 4.3, reviews: "333k", price: "₹1200" },
    { img: most6, text: "Roll-on waxing (full arms, legs & underarms)", rating: 4.4, reviews: "155k", price: "₹899" },
  ];

  const gap = 20;
  const total = cards.length;

  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  /* ---------- RESPONSIVE ---------- */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 480) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(4);
      else setVisibleCount(5);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ---------- CLONE FOR INFINITE ---------- */
  const slides = [
    ...cards.slice(-visibleCount),
    ...cards,
    ...cards.slice(0, visibleCount),
  ];

  /* ---------- TRANSFORM ---------- */
  useEffect(() => {
    if (!trackRef.current) return;

    const slideWidth =
      trackRef.current.children[0].offsetWidth + gap;

    const moveX = slideWidth * (currentIndex + visibleCount);

    trackRef.current.style.transform = `translateX(-${moveX}px)`;
    trackRef.current.style.transition = transition
      ? "transform 0.4s ease"
      : "none";
  }, [currentIndex, visibleCount, transition]);

  /* ---------- RESET ---------- */
  const handleTransitionEnd = () => {
    if (currentIndex >= total) {
      setTransition(false);
      setCurrentIndex(0);
    }

    if (currentIndex < 0) {
      setTransition(false);
      setCurrentIndex(total - 1);
    }
  };

  /* ---------- CONTROLS ---------- */
  const next = () => {
    setTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="mostbooked-wrapper">
      <h2 className="mostbooked-heading">Most Booked Services</h2>

      <div className="mostbooked-carousel">
        <button className="mostbooked-arrow left" onClick={prev}>
          <FaArrowLeft />
        </button>

        <button className="mostbooked-arrow right" onClick={next}>
          <FaArrowRight />
        </button>

        <div className="mostbooked-viewport">
          <div
            className="mostbooked-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className="mostbooked-item"
                style={{
                  flex: `0 0 calc((100% - ${
                    (visibleCount - 1) * gap
                  }px) / ${visibleCount})`,
                  marginRight: gap,
                }}
              >
                <img src={item.img} alt={item.text} className="mostbooked-image" />
                <p className="mostbooked-text">{item.text}</p>
                <p className="mostbooked-rating">
                  ⭐ {item.rating} ({item.reviews})
                </p>
                <p className="mostbooked-price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostBookedCustomCarousel;
