import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../components/Newnote.css";

import furniture from "../assets/furniture.jpg";
import wall from "../assets/wallmakeover.jpg";
import smartlock from "../assets/smartlocks.jpg";
import water from "../assets/water.png";
import kitchcleaning from "../assets/kitchen-cleaning.jpg";
import laptop from "../assets/laptop.jpg";

const NewnoteCustomCarousel = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);

  // 👈 Add path property for navigation
  const cards = [
    { id: 1, img: furniture, text: "Furniture Wood Polish", path: "/service/1" },
    { id: 2, img: water, text: "Native Water Purifier", path: "/service/2" },
    { id: 3, img: wall, text: "Wall makeover by Rewamp", path: "/service/3" },
    { id: 4, img: smartlock, text: "Native Smart Lock", path: "/service/4" },
    { id: 5, img: kitchcleaning, text: "Kitchen Cleaning", path: "/service/5" },
    { id: 6, img: laptop, text: "Laptop", path: "/service/6" },
  ];

  const gap = 20;
  const total = cards.length;

  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  /* ---------- RESPONSIVE ---------- */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 480) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(3);
      else setVisibleCount(5);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ---------- CLONE SLIDES ---------- */
  const slides = [
    ...cards.slice(-visibleCount),
    ...cards,
    ...cards.slice(0, visibleCount),
  ];

  /* ---------- TRANSFORM ---------- */
  useEffect(() => {
    if (!trackRef.current) return;

    const slideWidth = trackRef.current.children[0].offsetWidth + gap;
    const moveX = slideWidth * (currentIndex + visibleCount);

    trackRef.current.style.transform = `translateX(-${moveX}px)`;
    trackRef.current.style.transition = transition ? "transform 0.4s ease" : "none";
  }, [currentIndex, visibleCount, transition]);

  /* ---------- RESET FOR INFINITE ---------- */
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
    setShowLeftArrow(true);
  };

  const prev = () => {
    setTransition(true);
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex <= 0) setShowLeftArrow(false);
      return newIndex;
    });
  };

  return (
    <div className="newnote-wrapper">
      <h2 className="newnote-heading">New & Noteworthy</h2>

      <div className="newnote-carousel">
        {/* LEFT ARROW */}
        {showLeftArrow && (
          <button className="newnote-arrow left" onClick={prev}>
            <FaArrowLeft />
          </button>
        )}

        {/* RIGHT ARROW */}
        <button className="newnote-arrow right" onClick={next}>
          <FaArrowRight />
        </button>

        <div className="newnote-viewport">
          <div
            className="newnote-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="newnote-slide"
                style={{
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
                  marginRight: gap,
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="newnote-image"
                  onClick={() => navigate(slide.path)} // CLICK NAVIGATION
                />
                <p className="newnote-text">{slide.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewnoteCustomCarousel;
