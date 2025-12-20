// src/Pages/Native.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Native.css";
import Footer from "../Pages/Footer.jsx";
import Walls from "../components/Walls.jsx";

// Wall images
import nativewall1 from "../assets/nativewall1.png";
import nativewall2 from "../assets/nativewall2.png";
import nativewall3 from "../assets/nativewall3.png";

// Carousel images
import nativecarousel1 from "../assets/nativecarousel1.png";
import nativecarousel2 from "../assets/nativecarousel2.png";
import nativecarousel3 from "../assets/nativecarousel3.png";
import nativecarousel4 from "../assets/nativecarousel4.png";
import nativecarousel5 from "../assets/nativecarousel5.png";
import nativecarousel6 from "../assets/nativecarousel6.png";

import nativecaro1 from "../assets/nativecaro1.png";
import nativecaro2 from "../assets/nativecaro2.png";
import nativecaro3 from "../assets/nativecaro3.png";
import nativecaro4 from "../assets/nativecaro4.png";
import nativecaro5 from "../assets/nativecaro5.png";
import nativecaro6 from "../assets/nativecaro6.png";

export default function Native({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const navigate = useNavigate();

  const carousel1 = [
    nativecarousel1,
    nativecarousel2,
    nativecarousel3,
    nativecarousel4,
    nativecarousel5,
    nativecarousel6,
  ];

  const carousel2 = [
    nativecaro1,
    nativecaro2,
    nativecaro3,
    nativecaro4,
    nativecaro5,
    nativecaro6,
  ];

  // Loader
  useEffect(() => {
    setHideNavbar(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setHideNavbar]);

  // Responsive visible count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 600) setVisibleCount(1);
      else if (window.innerWidth <= 992) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Carousel navigation
  const next = (setIndex, length) =>
    setIndex((prev) => (prev < length - visibleCount ? prev + 1 : prev));
  const prev = (setIndex) => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

  if (loading) {
    return (
      <div className="native-loading-overlay">
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="native-page">
     <div className="wall-panel-cards">
          <div className="wall-panel-images">
            <img src={ nativewall1} alt="Wall Panels" />
          </div>
        </div>
        

      {/* Carousel 1 */}
      <h2 className="native-carousel-title">Best-in-class Features</h2>
      <div className="native-carousel">
        <button className="arrow left" onClick={() => prev(setIndex1)}>
          <FaArrowLeft />
        </button>
        <div className="native-viewport">
          <div
            className="native-track"
            style={{
              transform: `translateX(-${index1 * (100 / visibleCount)}%)`,
            }}
          >
            {carousel1.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => navigate("/")}
              />
            ))}
          </div>
        </div>
        <button
          className="arrow right"
          onClick={() => next(setIndex1, carousel1.length)}
        >
          <FaArrowRight />
        </button>
      </div>

       <div className="wall-panel-cards">
            <div className="wall-panel-images">
              <img src={ nativewall2} alt="Wall Panels" />
            </div>
          </div>
          

      {/* Carousel 2 */}
      <h2 className="native-carousel-title">Explore More</h2>
      <div className="native-carousel">
        <button className="arrow left" onClick={() => prev(setIndex2)}>
          <FaArrowLeft />
        </button>
        <div className="native-viewport">
          <div
            className="native-track"
            style={{
              transform: `translateX(-${index2 * (100 / visibleCount)}%)`,
            }}
          >
            {carousel2.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => navigate("/")}
              />
            ))}
          </div>
        </div>
        <button
          className="arrow right"
          onClick={() => next(setIndex2, carousel2.length)}
        >
          <FaArrowRight />
        </button>
      </div>
 <div className="wall-panel-cards">
      <div className="wall-panel-images">
        <img src={ nativewall3} alt="Wall Panels" />
      </div>
    </div>
    

      <Footer />
    </div>
  );
}
