// src/Pages/Native.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Native.css";

// Images
import nativewall1 from "../assets/nativewall1.png";
import nativewall2 from "../assets/nativewall2.png";
import nativewall3 from "../assets/nativewall3.png";
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
import Footer from "../Pages/Footer.jsx";


const carouselSlides = [
  { img: nativecarousel1, path: "/" },
  { img: nativecarousel2, path: "/" },
  { img: nativecarousel3, path: "/" },
  { img: nativecarousel4, path: "/" },
  { img: nativecarousel5, path: "/" },
  { img: nativecarousel6, path: "/" },
];

const carouselSlides2 = [
  { img: nativecaro1, path: "/" },
  { img: nativecaro2, path: "/" },
  { img: nativecaro3, path: "/" },
  { img: nativecaro4, path: "/" },
  { img: nativecaro5, path: "/" },
  { img: nativecaro6, path: "/" },
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
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

//  component
export default function Native({ setHideNavbar, setHideSearch }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 useEffect(() => {
  setHideNavbar(true); 
  const timer = setTimeout(() => {
    setLoading(false);
    setHideNavbar(false); 
  }, 2000);
  return () => clearTimeout(timer);
}, [setHideNavbar]);



  return (
    <div className="native-page">
      {loading && (
        <div className="native-loading-overlay">
          <div className="spinner">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}

      {!loading && (
        <>
          <div className="wall-panel-card wall">
            <div className="wall-panel-image2">
              <img src={nativewall1} alt="Wall Panels" />
            </div>
          </div>

          <div className="native-carousel-wrapper">
            <h2 className="native-carousel-title">Best-in-class Features</h2>
            <Slider {...settings}>
              {carouselSlides.map((slide, index) => (
                <div key={index} className="native-carousel-slide">
                  <img
                    src={slide.img}
                    className="native-carousel-image"
                    alt="offers"
                    onClick={() => navigate(slide.path)}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="wall-panel-card">
            <div className="wall-panel-image">
              <img src={nativewall2} alt="Wall Panels" />
            </div>
          </div>

          <div className="native-carousel-wrapper">
            <h2 className="native-carousel-title">Explore More</h2>
            <Slider {...settings}>
              {carouselSlides2.map((slide, index) => (
                <div key={index} className="native-carousel-slide">
                  <img
                    src={slide.img}
                    className="native-carousel-image"
                    alt="offers"
                    onClick={() => navigate(slide.path)}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="wall-panel-card">
            <div className="wall-panel-image">
              <img src={nativewall3} alt="Wall Panels" />
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
