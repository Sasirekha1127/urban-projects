import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Revamp.css";
import Footer from "../Pages/Footer.jsx";

import revamp1 from "../assets/revamp1.png";
import revamp2 from "../assets/revamp2.png";
import revamp3 from "../assets/revamp3.png";
import revamp4 from "../assets/revamp4.png";
import revamp5 from "../assets/revamp5.png";

import revampcaro1 from "../assets/revampcaro1.png";
import revampcaro2 from "../assets/revampcaro2.png";
import revampcaro3 from "../assets/revampcaro3.png";
import revampcaro4 from "../assets/revampcaro4.png";

export default function Revamp({ setHideNavbar, setHideSearch }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHideNavbar(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setHideNavbar, setHideSearch]);

  const images1 = [revamp1, revamp2, revamp3, revamp4, revamp5];
  const images2 = [revampcaro1, revampcaro2, revampcaro3, revampcaro4];

  const NextArrow = ({ onClick }) => (
    <div className="revamp-arrow right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="revamp-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="revamp-page">
      {loading ? (
        <div className="spinner-wrapper">
          <div className="spinner">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="revamp-carousel-wrapper">
            <h2 className="revamp-carousel-title">Explore by space</h2>
            <Slider {...settings}>
              {images1.map((img, index) => (
                <div className="revamp-slide" key={index}>
                  <img
                    src={img}
                    alt={`space ${index + 1}`}
                    className="revamp-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="revamp-carousel-wrapper">
            <h2 className="revamp-carousel-title">Beautiful walls for all your needs</h2>
            <Slider {...settings}>
              {images2.map((img, index) => (
                <div className="revamp-slide" key={index}>
                  <img
                    src={img}
                    alt={`wall ${index + 1}`}
                    className="revamp-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
