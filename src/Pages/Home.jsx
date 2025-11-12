import React, { useState, useEffect } from "react";
import "../Pages/Home.css";
import urban from "../assets/urban.png";
import women from "../assets/women.png";
import cleaningImage from "../assets/cleaning.png";
import electricianImage from "../assets/electricion.png";
import waterpurifierImage from "../assets/waterpurifier.png";
import acImage from "../assets/ac repairs.png";
import men from "../assets/men.png";
import { useNavigate } from "react-router-dom";
import customerImg from "../assets/customer.png";
import starImg from "../assets/star.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import carosuelImg1 from "../assets/carouselimg-1.png";
import carosuelImg2 from "../assets/carouselimg-2.png";
import carosuelImg3 from "../assets/carouselimg-3.png";
import carosuelImg4 from "../assets/carouselimg-4.png";
import carosuelImg5 from "../assets/carouselimg-5.png";
import furniture from "../assets/furniture.jpg";
import wall from "../assets/wallmakeover.jpg"
import smartlock from "../assets/smartlocks.jpg"
import water from "../assets/waterpurifier.png"
import kitchcleaning from "../assets/kitchen-cleaning.jpg"
import laptop from "../assets/laptop.jpg"
import most1 from "../assets/most1.png"
import most2 from "../assets/most2.png"
import most3 from "../assets/most3.png"
import most4 from "../assets/most4.png"
import most5 from "../assets/most5.png"
import most6 from "../assets/most6.png"
import walls from "../assets/wallpanel.jpg"
import wax from "../assets/salon1.png"
import cleanup from "../assets/salon2.png"
import haircare from "../assets/salon3.png"
// import AOS from "aos";
import stress from "../assets/spa1.png"
import pain from "../assets/spa2.png"
import wall2 from "../assets/wallpanel2.png"
import homes from "../assets/homes.png"
import kitchen from "../assets/kitchendeep.png"
import bathroomfull from "../assets/bathroomfull.png"
import sofa from "../assets/sofa.png"
import wall3 from "../assets/wall3.png"
import ApplianceSection from "../Pages/Appliance.jsx";
import Footer from "./Footer.jsx";





function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (path) => {
    if (path) navigate(path);
  };

  // ---------- Main Carousel ----------
  const slides = [
    { img: carosuelImg1, path: "/wallmakeover" },
    { img: carosuelImg2, path: "/sofacleaning" },
    { img: carosuelImg3, path: "/salonpackages" },
    { img: carosuelImg4 },
    { img: carosuelImg5 },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow right" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow left" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // desktop → show 3
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // below 1200px → show 2
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // below 768px → show 1
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  // ---------- New & Noteworthy Carousel ----------
  const images = [
    { img: furniture, text: "Furniture Wood Polish" },
    { img: water, text: "Native Water Purifier" },
    { img: wall, text: "Wall makeover by Rewamp" },
    { img: smartlock, text: "Native Smart Lock " },
    { img: kitchcleaning, text: "Kitchen Cleaning" },
    { img: laptop, text: "Laptop" },
  ];

  ////*         MOST BOOKED SERVICE           */////

  const mostBooked = [
    { img: most1, text: "Intense bathroom cleaning", rating: 4.9, reviews: "3.5M", price: "₹449" },
    { img: most2, text: "Intense cleaning (2 bathrooms)", rating: 4.49, reviews: "3.5M", price: "₹1200" },
    { img: most3, text: "Haircut for men", rating: 4.7, reviews: "471k", price: "₹299" },
    { img: most4, text: "Chimney cleaning", rating: 4.6, reviews: "1.8M", price: "₹399" },
    { img: most5, text: "Intense cleaning (3 bathrooms)", rating: 4.3, reviews: "333k", price: "₹1200" },
    { img: most6, text: "Roll-on waxing(full arms,legs & underarms", rating: 4.4, reviews: "155k", price: "₹899" },
  ];

  // SALON SERVICES
  const salonServices = [
    { img: wax, title: "Waxing" },
    { img: cleanup, title: "Cleanup" },
    { img: haircare, title: "Hair care" },
  ];

  // SPA SECTION
  const spaServices = [
    {
      title: "Stress relief",
      img: stress,
    },
    {
      title: "Pain relief",
      img: pain,
    },
  ]


  // cleaning & pest control
  const cleaning = [
    { img: homes, title: "Full Home/Move in Cleaning" },
    { img: bathroomfull, title: "Bathroom Cleaning" },
    { img: kitchen, title: " Kitchen Cleaning" },
    { img: sofa, title: " Sofa & carpet Cleaning" },
  ];





  const visibleCount = 5;

  const handleNext = () => {
    if (currentIndex < images.length - visibleCount) {
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
      {/* ---------- MAIN HOME SECTION ---------- */}
      <div className="home-wrapper">
        <div className="home-container">
          <h1>
            Home services at your <br /> doorstep
          </h1>

          <div className="home-box">
            <h3>What are you looking for?</h3>

            <div className="service-grid">
              <div
                className="service-group"
                onClick={() => handleNavigate("/salon")}
              >
                <div className="service-item1">
                  <img src={women} alt="Salon for Women" />
                </div>
                <div className="service-text">
                  <p>Salon for Women</p>
                </div>
              </div>

              <div
                className="service-group"
                onClick={() => handleNavigate("/men")}
              >
                <div className="service-item1">
                  <img src={men} alt="Salon for Men" />
                </div>
                <div className="service-text">
                  <p>Salon for Men</p>
                </div>
              </div>

              <div
                className="service-group"
                onClick={() => handleNavigate("/cleaning")}
              >
                <div className="service-item1">
                  <img src={cleaningImage} alt="Cleaning" />
                </div>
                <div className="service-text">
                  <p>Cleaning</p>
                </div>
              </div>

              <div
                className="service-group"
                onClick={() => handleNavigate("/electrician")}
              >
                <div className="service-item1">
                  <img src={electricianImage} alt="Electrician" />
                </div>
                <div className="service-text">
                  <p>Electricians & Carpenters</p>
                </div>
              </div>

              <div
                className="service-group"
                onClick={() => handleNavigate("/waterpurifier")}
              >
                <div className="service-item1">
                  <img src={waterpurifierImage} alt="Purifier" />
                </div>
                <div className="service-text">
                  <p>Native Water Purifier</p>
                </div>
              </div>

              <div
                className="service-group"
                onClick={() => handleNavigate("/ac-repair")}
              >
                <div className="service-item1">
                  <img src={acImage} alt="AC Repair" />
                </div>
                <div className="service-text">
                  <p>AC & Appliance Repair</p>
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

      {/* ---------- MAIN CAROUSEL ---------- */}
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${slide.path ? "clickable" : ""}`}
              onClick={() => handleNavigate(slide.path)}
            >
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* ---------- NEW & NOTEWORTHY ---------- */}
      <div className="newnote-wrapper">
        <h2 className="newnote-heading">New & Noteworthy</h2>

        <div className="newnote-carousel">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button className="newnote-arrow left" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
          )}

          {/* Image Track */}
          <div
            className="newnote-track"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {images.map((item, i) => (
              <div key={i} className="newnote-item">
                <img src={item.img} alt={item.text} />
                <p className="newnote-text">{item.text}</p>
              </div>
            ))}

          </div>

          {/* Right Arrow */}
          {currentIndex < images.length - visibleCount && (
            <button className="newnote-arrow right" onClick={handleNext}>
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
      {/* ---------- MOST BOOKED SERVICES ---------- */}
      <div className="mostbooked-wrapper">
        <h2 className="mostbooked-heading">Most Booked Services</h2>

        <div className="mostbooked-carousel">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button className="mostbooked-arrow left" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
          )}

          {/* Image Track */}
          <div className="mostbooked-track" style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
            {mostBooked.map((item, i) => (
              <div key={i} className="mostbooked-item">
                <img src={item.img} alt={item.text} />
                <p className="mostbooked-text">{item.text}</p>
                <p className="mostbooked-rating"> {item.rating} ({item.reviews})</p>
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

      {/* wall panel */}

      <div className="wall-panel-card">

        <div className="wall-panel-image">
          <img src={walls} alt="Wall Panels" />
        </div>
      </div>



      {/* SALON WAPPER */}
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


      {/* SPA SECTION */}
      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for women</h2>
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


      {/* wall panel 2 */}
      <div className="wall-panel-card">
        <div className="wall-panel-image">
          <img src={wall2} alt="Wall Panels" />
        </div>
      </div >

      {/* CLEANING & PEST CONTROL SECTION */}
      <div className="cleaning-wrapper">
        <h2 className="cleaning-heading">Cleaning & Pest Control</h2>

        <div className="cleaning-cards">
          {cleaning.map((item, index) => (
            <div key={index} className="cleaning-card">
              <img src={item.img} alt={item.title} />
              <p className="cleaning-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* wall panel 3 */}
      <div className="wall-panel-card">
        <div className="wall-panel-image">
          <img src={wall3} alt="Wall Panels" />
        </div>
      </div >
      <ApplianceSection />
      <Footer/>
           


      


      







    </>
  );
}

export default Home;
