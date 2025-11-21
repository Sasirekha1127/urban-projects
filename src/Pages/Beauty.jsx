import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import salon from "../assets/beauty1.png";
import beauty2 from "../assets/beauty2.png";
import beauty3 from "../assets/beauty3.png";
import beauty4 from "../assets/beauty4.png";
import men from "../assets/men.png";
import beauty5 from "../assets/beauty5.png";
import urban from "../assets/urban.png";
import starImg from "../assets/star.png";
import customerImg from "../assets/customer.png";
// ......carousel........
import beautycarousel from "../assets/beautycarousel.png";
import beautycarousel2 from "../assets/beautycarousel2.png";
import beautycarousel3 from "../assets/beautycarousel3.png";
import beautycarousel4 from "../assets/beautycarousel4.png";
import beautycarousel5 from "../assets/beautycarousel5.png";



// .........carousel.......
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
const slides = [
  { img:  beautycarousel, path: "/wallmakeover" },
  { img:  beautycarousel2, path: "/sofacleaning" },
  { img:  beautycarousel3, path: "/salonpackages" },
  { img:  beautycarousel4, path: "/somepage4" },
  { img:  beautycarousel5, path: "/somepage5" },
];

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

function Beauty({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


  useEffect(() => {
    // Hide navbar during loading
    setHideNavbar(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      setHideNavbar(false);
    };
  }, [setHideNavbar]);



  return (
    <>
      {/* ---------- MAIN HOME SECTION ---------- */}
      <div className="home-wrapper">
        <div className="home-container">
          <h1>
            Beauty services at your <br /> doorstep
          </h1>

          <div className="home-box">
            <h3>What are you looking for?</h3>

            <div className="service-grid">
              <div className="service-group" onClick={() => handleNavigate("/salon")}>
                <div className="service-item1">
                  <img src={salon} alt="Salon for Women" />
                </div>
                <div className="service-text">
                  <p>Salon for Women</p>
                </div>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/men")}>
                <div className="service-item1">
                  <img src={beauty2} alt="Salon for Men" />
                </div>
                <div className="service-text">
                  <p>Salon for Women</p>
                </div>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/cleaning")}>
                <div className="service-item1">
                  <img src={beauty3} alt="Cleaning" />
                </div>
                <div className="service-text">
                  <p>Hair Studio for Women</p>
                </div>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/electrician")}>
                <div className="service-item1">
                  <img src={beauty4} alt="Electrician" />
                </div>
                <div className="service-text">
                  <p>Makeup & Styling Studio</p>
                </div>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/waterpurifier")}>
                <div className="service-item1">
                  <img src={men} alt="Purifier" />
                </div>
                <div className="service-text">
                  <p>Salon Prime</p>
                </div>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/ac-repair")}>
                <div className="service-item1">
                  <img src={beauty5} alt="AC Repair" />
                </div>
                <div className="service-text">
                  <p>Massage for men</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="home-image-container">
          <img src={urban} alt="Beauty Service" className="home-image" />
        </div>
      </div>

      {/* ---------- RATINGS SECTION ---------- */}
      <div className="ratings-section">
        <div className="rating-box1">
          <img src={starImg} alt="rating" className="rating-icon" />
          <div>
            <h4>4.8</h4>
            <p>Service Rating*</p>
          </div>
        </div>

        <div className="rating-box1">
          <img src={customerImg} alt="customers" className="rating-icon" />
          <div>
            <h4>12M+</h4>
            <p>Customers Globally*</p>
          </div>
        </div>
      </div>

      {/* ...........carousel.......... */}
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
    </>

  );
}

export default Beauty;
