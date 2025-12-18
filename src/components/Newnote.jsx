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

  const cards = [
    { img: furniture, text: "Furniture Wood Polish" },
    { img: water, text: "Native Water Purifier" },
    { img: wall, text: "Wall makeover by Rewamp" },
    { img: smartlock, text: "Native Smart Lock" },
    { img: kitchcleaning, text: "Kitchen Cleaning" },
    { img: laptop, text: "Laptop" },
  ];

  const gap = 20;

  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const total = cards.length;

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

    const slideWidth =
      trackRef.current.children[0].offsetWidth + gap;

    const moveX = slideWidth * (currentIndex + visibleCount);

    trackRef.current.style.transform = `translateX(-${moveX}px)`;
    trackRef.current.style.transition = transition
      ? "transform 0.4s ease"
      : "none";
  }, [currentIndex, visibleCount, transition]);

  /* ---------- RESET WITHOUT USER KNOWING ---------- */
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
    <div className="newnote-wrapper">
      <h2 className="newnote-heading">New & Noteworthy</h2>

      <div className="newnote-carousel">
        <button className="newnote-arrow left" onClick={prev}>
          <FaArrowLeft />
        </button>

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
                  flex: `0 0 calc((100% - ${
                    (visibleCount - 1) * gap
                  }px) / ${visibleCount})`,
                  marginRight: gap,
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="newnote-image"
                  onClick={() =>
                    slide.path && navigate(slide.path)
                  }
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
