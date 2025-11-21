import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/carouselPage.css";


import carosuelImg1 from "../assets/carouselimg-1.png";
import carosuelImg2 from "../assets/carouselimg-2.png";
import carosuelImg3 from "../assets/carouselimg-3.png";
import carosuelImg4 from "../assets/carouselimg-4.png";
import carosuelImg5 from "../assets/carouselimg-5.png";

const CarouselPage = () => {
    const navigate = useNavigate(); 

  const slides = [
     { img: carosuelImg1, path: "/wallmakeover" },
    { img: carosuelImg2, path: "/sofacleaning" },
    { img: carosuelImg3, path: "/salonpackages" },
    { img: carosuelImg4, path: "/otherpage" },
    { img: carosuelImg5, path: "/otherpage2" },
  ];

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Offers & discounts</h2>

      <Slider {...settings} className="bg-red">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              onClick={() => {
          if (slide.path) navigate(slide.path); 
        }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselPage;
