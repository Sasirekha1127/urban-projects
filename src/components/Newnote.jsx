import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import slick-carousel default styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../components/Newnote.css";

import furniture from "../assets/furniture.jpg";
import wall from "../assets/wallmakeover.jpg";
import smartlock from "../assets/smartlocks.jpg";
import water from "../assets/waterpurifier.png";
import kitchcleaning from "../assets/kitchen-cleaning.jpg";
import laptop from "../assets/laptop.jpg";

const Newnote = () => {
  const slides = [
    { img: furniture, text: "Furniture Wood Polish" },
    { img: water, text: "Native Water Purifier" },
    { img: wall, text: "Wall makeover by Rewamp" },
    { img: smartlock, text: "Native Smart Lock" },
    { img: kitchcleaning, text: "Kitchen Cleaning" },
    { img: laptop, text: "Laptop" },
  ];

  const NextArrow = ({ onClick }) => (
    <div className="newnote-arrow right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="newnote-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,   // tablet view shows 3
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,   // small tablets still 3
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,   // mobile shows 1
        slidesToScroll: 1,
      },
    },
    ],
  };

  return (
    <div className="newnote-wrapper">
      <h2 className="newnote-heading">New & Noteworthy</h2>
      <Slider {...settings} className="newnote-slider">
        {slides.map((slide, index) => (
          <div key={index} className="newnote-slide">
            <img src={slide.img} alt={slide.text} className="newnote-image" />
            <p className="newnote-text">{slide.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Newnote;
