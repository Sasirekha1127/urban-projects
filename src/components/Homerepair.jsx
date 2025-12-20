import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../components/Homerepair.css";

import fan from "../assets/fan.png";
import doors from "../assets/doors.png";
import switchs from "../assets/switch.png";
import tap from "../assets/tap.png";
import cupboard from "../assets/cupboard.png";
import decors from "../assets/decors.png";

const HomeRepairs = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const [slidesToShow, setSlidesToShow] = useState(5);
  const [hasMoved, setHasMoved] = useState(false); // 👈 KEY STATE

  const homeRepairs = [
    { img: decors, text: "Drill & hang (wall decor)" },
    { img: cupboard, text: "Cupboard hinge installation" },
    { img: tap, text: "Tap repair" },
    { img: doors, text: "Minor wooden door repair" },
    { img: switchs, text: "Switchboard repair" },
    { img: fan, text: "Fan repair" },
  ];

  /* ---------- RESPONSIVE ---------- */
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 480) setSlidesToShow(1);
      else if (w <= 768) setSlidesToShow(2);
      else if (w <= 1024) setSlidesToShow(3);
      else setSlidesToShow(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------- LEFT ARROW ---------- */
  const PrevArrow = ({ onClick }) => {
    if (!hasMoved) return null; // 👈 hide initially
    return (
      <button className="repair-arrow left" onClick={onClick}>
        <FaArrowLeft />
      </button>
    );
  };

  /* ---------- RIGHT ARROW ---------- */
  const NextArrow = ({ onClick }) => (
    <button
      className="repair-arrow right"
      onClick={() => {
        setHasMoved(true); // 👈 user moved slider
        onClick();
      }}
    >
      <FaArrowRight />
    </button>
  );

  /* ---------- SLIDER SETTINGS ---------- */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="repair-wrapper">
      <h2 className="repair-heading">Home Repairs</h2>

      <Slider ref={sliderRef} {...settings}>
        {homeRepairs.map((item, index) => (
          <div key={index} className="repair-item">
            <img
              src={item.img}
              alt={item.text}
              className="repair-image"
              onClick={() => navigate(`/service/${index}`)}
            />
            <p className="repair-text">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeRepairs;
