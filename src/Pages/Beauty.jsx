import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Beauty.css";
import Footer from "../pages/footer.jsx";

import salon from "../assets/beauty1.png";
import beauty2 from "../assets/beauty2.png";
import beauty3 from "../assets/beauty3.png";
import beauty4 from "../assets/beauty4.png";
import men from "../assets/men.png";
import beauty5 from "../assets/beauty5.png";
import urban from "../assets/urban.png";
import starImg from "../assets/star.png";
import customerImg from "../assets/customer.png";

import beautycarousel from "../assets/beautycarousel.png";
import beautycarousel2 from "../assets/beautycarousel2.png";
import beautycarousel3 from "../assets/beautycarousel3.png";
import beautycarousel4 from "../assets/beautycarousel4.png";
import beautycarousel5 from "../assets/beautycarousel5.png";

import mostbook1 from "../assets/mostbook1.png";
import mostbook2 from "../assets/mostbook2.png";
import mostbook3 from "../assets/mostbook3.png";
import mostbook4 from "../assets/mostbook4.png";
import mostbook5 from "../assets/mostbook5.png";
import mostbook6 from "../assets/mostbook6.png";

import wax from "../assets/salon1.png";
import cleanup from "../assets/salon2.png";
import haircare from "../assets/salon3.png";

import beautywall from "../assets/beautywall1.png";
import wall2 from "../assets/wall2.png";
import wall3 from "../assets/wall3.png";

import stress from "../assets/spa1.png";
import pain from "../assets/spa2.png";

import hair3 from "../assets/hair3.png";
import hair4 from "../assets/hair4.png";
import hair5 from "../assets/hair5.png";
import hair6 from "../assets/hair6.png";
import hair7 from "../assets/hair7.png";
import hair8 from "../assets/hair8.png";

// salon for men
import men1 from "../assets/men1.png";
import men2 from "../assets/men2.png";
import hair from "../assets/hairmen.png";
import facial from "../assets/facialmen.png";
import pedicure from "../assets/pedicuremen.png";



const SalonServices = [
  { img: facial, title: "Haircut" },
  { img: hair, title: "Cleanup" },
  { img: pedicure, title: "Pedicure" },
];

const spaServices = [
  { title: "Stress relief", img: men1 },
  { title: "Pain relief", img: men2 },
];


const images = [
  { img: mostbook5, text: "In curl blow-dry", rating: 4.3, reviews: "333k", price: "₹399" },
  { img: mostbook6, text: "Straight & blow-dry", rating: 4.4, reviews: "155k", price: "₹399" },
  { img: hair3, text: "Basic makeup package", rating: 4.4, reviews: "155k", price: "₹2,099" },
  { img: hair4, text: "Basic makeup", rating: 4.88, reviews: "3.5M", price: "₹1,599" },
  { img: hair5, text: "Haircut for women", rating: 4.49, reviews: "3.5M", price: "₹549" },
  { img: hair6, text: "Hair color", rating: 4.7, reviews: "471k", price: "₹399" },
  { img: hair7, text: "L'Oreal root touch-up", rating: 4.6, reviews: "1.8M", price: "₹1300" },
  { img: hair8, text: "HD finish makeup", rating: 4.3, reviews: "333k", price: "₹2499" },

];

// SPA SERVICES
const spaService = [
  { title: "Stress relief", img: stress },
  { title: "Pain relief", img: pain },
];

// ---------- ARROWS ----------
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

// Slides
const slides = [
  { img: beautycarousel, path: "/wallmakeover" },
  { img: beautycarousel2, path: "/sofacleaning" },
  { img: beautycarousel3, path: "/salonpackages" },
  { img: beautycarousel4, path: "/somepage4" },
  { img: beautycarousel5, path: "/somepage5" },
];

// Main carousel settings
const mainCarouselSettings = {
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
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

// ---------- MOST BOOKED ----------
const MostBooked = () => {
  const mostBooked = [
    { img: mostbook1, text: "Haircut for men", rating: 4.88, reviews: "3.5M", price: "₹299" },
    { img: mostbook2, text: "Crystal rose pedicure", rating: 4.49, reviews: "3.5M", price: "₹799" },
    { img: mostbook3, text: "Roll on waxing", rating: 4.7, reviews: "471k", price: "₹899" },
    { img: mostbook4, text: "Beard trimming", rating: 4.6, reviews: "1.8M", price: "₹250" },
    { img: mostbook5, text: "In curl blow-dry", rating: 4.3, reviews: "333k", price: "₹399" },
    { img: mostbook6, text: "Straight & blow-dry", rating: 4.4, reviews: "155k", price: "₹399" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mostbooked-wrapper">
      <h2 className="mostbooked-heading">Most Booked Services</h2>

      <Slider {...settings} className="mostbooked-carousel">
        {mostBooked.map((item, index) => (
          <div key={index} className="mostbooked-item">
            <img src={item.img} alt={item.text} className="mostbooked-image" />
            <p className="mostbooked-text">{item.text}</p>
            <p className="mostbooked-rating">{item.rating} ({item.reviews})</p>
            <p className="mostbooked-price">{item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// ---------- WALL PANEL COMPONENT (Fixed) ----------
const WallPanel = () => {
  return (
    <div className="wall-panel-card">
      <div className="wall-panel-image">
        <img src={beautywall} alt="Wall Panels" />
      </div>
    </div>
  );
};

// ---------- MAIN BEAUTY PAGE ----------
function Beauty({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = (path) => navigate(path);

  useEffect(() => {
    setHideNavbar(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setHideNavbar]);

  const salonServices = [
    { img: wax, title: "Waxing" },
    { img: cleanup, title: "Cleanup" },
    { img: haircare, title: "Hair care" },
  ];

  return (
    <>
      {/* ---------- HOME SECTION ---------- */}
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
                <p className="service-text">Salon for Women</p>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/men")}>
                <div className="service-item1">
                  <img src={beauty2} alt="Salon for Men" />
                </div>
                <p className="service-text">Salon for Men</p>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/cleaning")}>
                <div className="service-item1">
                  <img src={beauty3} alt="Hair Studio" />
                </div>
                <p className="service-text">Hair Studio for Women</p>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/electrician")}>
                <div className="service-item1">
                  <img src={beauty4} alt="Makeup" />
                </div>
                <p className="service-text">Makeup & Styling Studio</p>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/waterpurifier")}>
                <div className="service-item1">
                  <img src={men} alt="Salon Prime" />
                </div>
                <p className="service-text">Salon Prime</p>
              </div>

              <div className="service-group" onClick={() => handleNavigate("/ac-repair")}>
                <div className="service-item1">
                  <img src={beauty5} alt="Massage" />
                </div>
                <p className="service-text">Massage for Men</p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-image-container">
          <img src={urban} alt="Beauty Service" className="home-image" />
        </div>
      </div>

      {/* ---------- RATINGS ---------- */}
      <div className="ratings-section">
        <div className="rating-box1">
          <img src={starImg} className="rating-icon" alt="rating" />
          <div>
            <h4>4.8</h4>
            <p>Service Rating*</p>
          </div>
        </div>

        <div className="rating-box1">
          <img src={customerImg} className="rating-icon" alt="customers" />
          <div>
            <h4>12M+</h4>
            <p>Customers Globally*</p>
          </div>
        </div>
      </div>

      {/* ---------- MAIN CAROUSEL ---------- */}
      <div className="carousel-container">
        <h2 className="carousel-heading">Offers & discounts</h2>

        <Slider {...mainCarouselSettings}>
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <img
                src={slide.img}
                className="carousel-image"
                alt="offer"
                onClick={() => navigate(slide.path)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* ---------- MOST BOOKED ---------- */}
      <MostBooked />

      {/* ---------- SALON SECTION ---------- */}
      <div className="salon-wrapper">
        <h2 className="salon-heading">Salon for Women</h2>

        <div className="salon-cards">
          {salonServices.map((item, index) => (
            <div key={index} className="salon-card">
              <img src={item.img} alt={item.title} />
              <p className="salon-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- WALL PANEL SECTION ---------- */}
      <WallPanel />

      {/* SPA SECTION */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for women</h2>
        <p className="spa-sub">Refresh. Rewind. Rejuvenate.</p>

        <div className="spa-cards">
          {spaService.map((item, index) => (
            <div key={index} className="spa-card">
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="hair-wrapper">

        {/* Heading + Sub Heading + See All */}
        <div className="hair-header">
          <div>
            <h2 className="hair-main-heading">Hair services</h2>
            <p className="hair-sub-heading">Refreshed style, revamped look</p>
          </div>

          <button className="seeall-btn">See All</button>
        </div>

        {/* Grid Images */}
        <div className="hair-grid">
          {images.map((item, index) => (
            <div className="hair-card" key={index}>
              <img src={item.img} alt="hair" />

              <p className="hair-title">{item.text}</p>

              <div className="hair-rating">
                {item.rating} <span>({item.reviews})</span>
              </div>

              <p className="hair-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ....wall pannel.... */}
      <div className="wall-panel-card">
        <div className="wall-panel-image">
          <img src={wall2} alt="Wall Panels" />
        </div>
      </div>

      {/* salon for men */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Salon for Men</h2>

        <div className="spa-cards">
          {SalonServices.map((item, index) => (
            <div key={index} className="spa-card">
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ....wall pannel.... */}
      <div className="wall-panel-card">
        <div className="wall-panel-image">
          <img src={wall3} alt="Wall Panels" />
        </div>
      </div>

            {/* Massage for Men */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for Men</h2>
        <p className="spa-sub">Curated massages by top therapists</p>

        <div className="spa-cards">
          {spaServices.map((item, index) => (
            <div key={index} className="spa-card">
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>

    </>
  );
}

export default Beauty;
