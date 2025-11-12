import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Appliance.css";

// Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ------- Images -------
import ac from "../assets/ac.png";
import wash from "../assets/washing.png";
import tv from "../assets/television.png";
import airpurifier from "../assets/air.png";
import geyser from "../assets/geyser.png";
import aircooler from "../assets/aircooler.png";
import lap from "../assets/laptop.jpg";
import fan from "../assets/fan.png";
import doors from "../assets/doors.png";
import switchs from "../assets/switch.png";
import tap from "../assets/tap.png";
import cupboard from "../assets/cupboard.png";
import decors from "../assets/decors.png";
import men1 from "../assets/men1.png"
import men2 from "../assets/men2.png"
import hair from "../assets/hairmen.png"
import facial from "../assets/facialmen.png"
import pedicure from "../assets/pedicuremen.png"
import walls3 from "../assets/walls3.png"


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
    infinite: true,
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

  // for "Most Booked Services"
  const mostBooked = [
    { img: decors, text: "Drill & hang (wall decor)", rating: 4.9, reviews: "100K", price: "₹129" },
    { img: cupboard, text: "Cupboard hinge installation", rating: 4.49, reviews: "52K", price: "₹199" },
    { img: tap, text: "Tap repair", rating: 4.7, reviews: "120k", price: "₹129" },
    { img: doors, text: "Minor wooden door repair", rating: 4.6, reviews: "50K", price: "₹199" },
    { img: switchs, text: "Switchboard/switchbox repair", rating: 4.3, reviews: "333k", price: "₹120" },
    { img: fan, text: "Fan repair", rating: 4.4, reviews: "155k", price: "₹199" },
  ];

  // SPA FOR MEN
  const spaServices = [
    {
      title: "Stress relief",
      img: men1,
    },
    {
      title: "Pain relief",
      img: men2,
    },
  ]

  //  SALON FOR WOMEN

  const salonServices = [
    { img: facial, title: "Haircut" },
    { img: hair, title: "Cleanup" },
    { img: pedicure, title: "Pedicure" },
  ];

  // "Most Booked" slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // Number of cards visible at once

  //  navigation
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

      {/* -------- Most Booked Section -------- */}
      <div className="mostbooked-wrapper">
        <h2 className="mostbooked-heading">Most Booked Services</h2>


        <div className="mostbooked-carousel">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button className="mostbooked-arrow left" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
          )}

          {/* Track (slides move via transform) */}
          <div
            className="mostbooked-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {mostBooked.map((item, i) => (
              <div key={i} className="mostbooked-item">
                <img src={item.img} alt={item.text} />
                <p className="mostbooked-text">{item.text}</p>
                <p className="mostbooked-rating">
                  {item.rating} ({item.reviews})
                </p>
                <p className="mostbooked-price">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {currentIndex < mostBooked.length - visibleCount && (
            <button className="mostbooked-arrow right" onClick={handleNext}>
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>


      {/* SPA FOR MEN*/}

      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for Men</h2>
        <p className="spa-sub">
          Refresh. Rewind. Rejuvenate.
        </p>

        <div className="spa-cards">
          {spaServices.map((item, index) => (
            <div key={index} className="spa-card">
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>


      {/* WALL PANEL */}
      <div className="wall-panel-card">

        <div className="wall-panel-image">
          <img src={walls3} alt="Wall Panels" />
        </div>
      </div>
      {/* SALON FOR MEN */}

      <div className="salon-wrapper">
        <h2 className="salon-heading" >Salon for women</h2>

        <div className="salon-cards">
          {salonServices.map((item, index) => (
            <div key={index} className="salon-card">
              <img src={item.img} alt={item.title} />
              <p className="salon-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
