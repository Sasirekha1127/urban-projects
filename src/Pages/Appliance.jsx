import React, { useState, useEffect, useRef } from "react";
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

export default function ApplianceCarousel() {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const appliances = [
    { title: "AC Service & Repair", img: ac },
    { title: "Washing Machine", img: wash },
    { title: "Television", img: tv },
    { title: "Air Purifier", img: airpurifier },
    { title: "Air Cooler", img: aircooler },
    { title: "Geyser", img: geyser },
    { title: "Laptop", img: lap },
  ];

  // Responsive slidesToShow
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

  // Custom arrows wrapped as JSX with currentSlide
  const PrevArrow = (props) => {
    const { onClick } = props;
    if (currentSlide === 0) return null; // hide on first slide
    return (
      <div className="appliance-arrow left" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    if (currentSlide + slidesToShow >= appliances.length) return null; // hide on last slide
    return (
      <div className="appliance-arrow right" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <div className="appliance-wrapper">
        <div className="appliance-header">
          <h2>Appliance Service & Repair</h2>
          <button>See all</button>
        </div>

        <div className="appliance-carousel-container">
          <Slider ref={sliderRef} {...settings}>
            {appliances.map((item, index) => (
              <div key={index} className="appliance-slide">
                <img src={item.img} alt={item.title} className="appliance-image" />
                <p>{item.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Homerepair />
    </>
  );
}
