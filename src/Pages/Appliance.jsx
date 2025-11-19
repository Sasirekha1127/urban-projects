import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Appliance.css";
import Homerepair from "../components/Homerepair.jsx";

// Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ------- Images -------
import ac from "../assets/cools.png";
import wash from "../assets/wash.png";
import tv from "../assets/television.png";
import airpurifier from "../assets/air.png";
import geyser from "../assets/geyser.png";
import aircooler from "../assets/aircooler.png";
import lap from "../assets/laptops.png";


// ------- Custom Arrows -------
const NextArrow = ({ onClick }) => (
  <div className="appliance-arrow right" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="appliance-arrow left" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

export default function ApplianceCarousel() {
  //  appliance slider
  const appliances = [
    { title: "AC Service & Repair", img: ac },
    { title: "Washing Machine", img: wash },
    { title: "Television", img: tv },
    { title: "Air Purifier", img: airpurifier },
    { title: "Air Cooler", img: aircooler },
    { title: "Geyser", img: geyser },
    { title: "Laptop", img: lap },
  ];

  //  carousel settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };



  return (
    <>
      {/* -------- Appliance Carousel -------- */}
      <div className="appliance-wrapper">
        <div className="appliance-header">
          <h2>Appliance Service & Repair</h2>
          <button>See all</button>
        </div>

        <div className="appliance-carousel-container">
          <Slider {...settings}>
            {appliances.map((item, index) => (
              <div key={index} className="appliance-slide">
                <img src={item.img} alt={item.title} className="appliance-image" />
                <p>{item.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Homerepair/>
</>
     
  );
}
