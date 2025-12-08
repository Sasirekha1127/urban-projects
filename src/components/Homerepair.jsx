import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/Homerepair.css";

import fan from "../assets/fan.png";
import doors from "../assets/doors.png";
import switchs from "../assets/switch.png";
import tap from "../assets/tap.png";
import cupboard from "../assets/cupboard.png";
import decors from "../assets/decors.png";

const HomeRepairs = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const homeRepairs = [
    { img: decors, text: "Drill & hang (wall decor)", rating: 4.9, reviews: "100K", price: "₹129" },
    { img: cupboard, text: "Cupboard hinge installation", rating: 4.49, reviews: "52K", price: "₹199" },
    { img: tap, text: "Tap repair", rating: 4.7, reviews: "120k", price: "₹129" },
    { img: doors, text: "Minor wooden door repair", rating: 4.6, reviews: "50K", price: "₹199" },
    { img: switchs, text: "Switchboard/switchbox repair", rating: 4.3, reviews: "333k", price: "₹120" },
    { img: fan, text: "Fan repair", rating: 4.4, reviews: "155k", price: "₹199" },
  ];

  // Update slidesToShow on window resize
  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 480) setSlidesToShow(1);
    else if (width <= 768) setSlidesToShow(2);
    else if (width <= 1024) setSlidesToShow(3);
    else setSlidesToShow(5);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom Left Arrow
  const PrevArrow = ({ onClick }) => {
    if (currentSlide === 0) return null; // hide initially
    return (
      <div className="repair-arrow left" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  // Custom Right Arrow
  const NextArrow = ({ onClick }) => {
    // hide only if last fully visible slide reached
    if (currentSlide >= homeRepairs.length - slidesToShow) return null;
    return (
      <div className="repair-arrow right" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false, // not infinite
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="repair-wrapper">
      <h2 className="repair-heading">Home Repairs</h2>
      <Slider ref={sliderRef} {...settings}>
        {homeRepairs.map((item, index) => (
          <div key={index} className="repair-item">
            <img src={item.img} alt={item.text} className="repair-image" />
            <p className="repair-text">{item.text}</p>
            <p className="repair-rating">
              {item.rating} ({item.reviews})
            </p>
            <p className="repair-price">{item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeRepairs;
