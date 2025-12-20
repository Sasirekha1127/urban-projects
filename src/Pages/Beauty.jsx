import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Beauty.css";
import Walls from "../components/Walls.jsx";
import Wallpannels from "../components/Wallpannels.jsx";
import Wallpannel from "../components/Wallpannel.jsx";
import Footer from "../Pages/Footer.jsx";

// Images
import salon from "../assets/beauty1.png";
import beauty2 from "../assets/beauty2.png";
import beauty3 from "../assets/beauty3.png";
import beauty4 from "../assets/beauty4.png";
import men from "../assets/men.png";
import beauty5 from "../assets/beauty5.png";
import urban from "../assets/urban.png";
import starImg from "../assets/star.png";
import customerImg from "../assets/customer.png";

// Offer Carousel images
import beautycarousel from "../assets/beautycarousel.png";
import beautycarousel2 from "../assets/beautycarousel2.png";
import beautycarousel3 from "../assets/beautycarousel3.png";
import beautycarousel4 from "../assets/beautycarousel4.png";
import beautycarousel5 from "../assets/beautycarousel5.png";

// Most booked carousel images
import mostbook1 from "../assets/mostbook1.png";
import mostbook2 from "../assets/mostbook2.png";
import mostbook3 from "../assets/mostbook3.png";
import mostbook4 from "../assets/mostbook4.png";
import mostbook5 from "../assets/mostbook5.png";
import mostbook6 from "../assets/mostbook6.png";

// Salon services
import wax from "../assets/salon1.png";
import cleanup from "../assets/salon2.png";
import haircare from "../assets/salon3.png";

// Spa services
import stress from "../assets/spa1.png";
import pain from "../assets/spa2.png";

import beautywall from "../assets/beautywall1.png";
import wall2 from "../assets/wall2.png";
import wall3 from "../assets/wall3.png";

import hair3 from "../assets/hair3.png";
import hair4 from "../assets/hair4.png";
import hair5 from "../assets/hair5.png";
import hair6 from "../assets/hair6.png";
import hair7 from "../assets/hair7.png";
import hair8 from "../assets/hair8.png";

import men1 from "../assets/men1.png";
import men2 from "../assets/men2.png";
import hair from "../assets/hairmen.png";
import facial from "../assets/facialmen.png";
import pedicure from "../assets/pedicuremen.png";

function Beauty({ setHideNavbar }) {
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

  const handleNavigate = (path) => navigate(path);

  // -------------------- OFFER CAROUSEL --------------------
  const offerCards = [
    { id: 1, image: beautycarousel },
    { id: 2, image: beautycarousel2 },
    { id: 3, image: beautycarousel3 },
    { id: 4, image: beautycarousel4 },
    { id: 5, image: beautycarousel5 },
  ];

  const offerRef = useRef(null);
  const [offerVisible, setOfferVisible] = useState(3);
  const offerGap = 20;
  const [offerIndex, setOfferIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setOfferVisible(1);
      else if (window.innerWidth <= 1024) setOfferVisible(2);
      else setOfferVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!offerRef.current) return;
    const slideWidth = offerRef.current.children[0].offsetWidth + offerGap;
    const moveX = slideWidth * offerIndex;
    offerRef.current.style.transition = "transform 0.5s ease";
    offerRef.current.style.transform = `translateX(-${moveX}px)`;
  }, [offerIndex, offerVisible]);

  const offerNext = () => {
    if (offerIndex < offerCards.length - offerVisible) setOfferIndex(prev => prev + 1);
  };
  const offerPrev = () => {
    if (offerIndex > 0) setOfferIndex(prev => prev - 1);
  };

  // -------------------- MOST BOOKED CAROUSEL --------------------
  const mostBooked = [
    { id: 1, image: mostbook1, text: "Haircut", rating: 4.8, reviews: 120, price: "$20" },
    { id: 2, image: mostbook2, text: "Facial", rating: 4.5, reviews: 80, price: "$25" },
    { id: 3, image: mostbook3, text: "Manicure", rating: 4.7, reviews: 95, price: "$15" },
    { id: 4, image: mostbook4, text: "Pedicure", rating: 4.6, reviews: 70, price: "$18" },
    { id: 5, image: mostbook5, text: "Massage", rating: 4.9, reviews: 130, price: "$30" },
    { id: 6, image: mostbook6, text: "Spa", rating: 4.7, reviews: 110, price: "$35" },
  ];

  const bookedRef = useRef(null);
  const [bookedVisible, setBookedVisible] = useState(3);
  const bookedGap = 20;
  const [bookedIndex, setBookedIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setBookedVisible(1);
      else if (window.innerWidth <= 768) setBookedVisible(2);
      else if (window.innerWidth <= 1024) setBookedVisible(3);
      else setBookedVisible(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!bookedRef.current) return;
    const slideWidth = bookedRef.current.children[0].offsetWidth + bookedGap;
    const moveX = slideWidth * bookedIndex;
    bookedRef.current.style.transition = "transform 0.5s ease";
    bookedRef.current.style.transform = `translateX(-${moveX}px)`;
  }, [bookedIndex, bookedVisible]);

  const bookedNext = () => {
    if (bookedIndex < mostBooked.length - bookedVisible) setBookedIndex(prev => prev + 1);
  };

  const bookedPrev = () => {
    if (bookedIndex > 0) setBookedIndex(prev => prev - 1);
  };

  // -------------------- SALON AND SPA SERVICES --------------------
  const salonServices = [
    { img: wax, title: "Waxing" },
    { img: cleanup, title: "Clean-up" },
    { img: haircare, title: "Hair Care" },
  ];

  const spaServices = [
    { img: stress, title: "Stress Relief" },
    { img: pain, title: "Pain Therapy" },
  ];

  const hairImages = [
    { img: hair3, text: "Basic makeup package", rating: 4.4, reviews: "155k", price: "₹2,099" },
    { img: hair4, text: "Basic makeup", rating: 4.88, reviews: "3.5M", price: "₹1,599" },
    { img: hair5, text: "Haircut for women", rating: 4.49, reviews: "3.5M", price: "₹549" },
    { img: hair6, text: "Hair color", rating: 4.7, reviews: "471k", price: "₹399" },
    { img: hair7, text: "L'Oreal root touch-up", rating: 4.6, reviews: "1.8M", price: "₹1300" },
    { img: hair8, text: "HD finish makeup", rating: 4.3, reviews: "333k", price: "₹2499" },
  ];

  const spaService = [
    { title: "Stress relief", img: men1, path: "/spa-men/stress" },
    { title: "Pain relief", img: men2, path: "/spa-men/pain" },
  ];

  const salonService = [
    { img: facial, title: "Haircut", path: "/salon-men/haircut" },
    { img: hair, title: "Cleanup", path: "/salon-men/cleanup" },
    { img: pedicure, title: "Pedicure", path: "/salon-men/pedicure" },
  ];

  if (loading) {
    return (
      <div className="beauty-loading-overlay">
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HOME SECTION */}
      <div className="home-wrapper">
        <div className="home-container">
          <h1>Beauty services at your <br /> doorstep</h1>
          <div className="home-box">
            <h3>What are you looking for?</h3>
            <div className="service-grid">
              <div className="service-group" onClick={() => handleNavigate("/salon")}>
                <div className="service-item1"><img src={salon} alt="Salon for Women" /></div>
                <p className="service-text">Salon for Women</p>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/men")}>
                <div className="service-item1"><img src={beauty2} alt="Salon for Men" /></div>
                <p className="service-text">Salon for Men</p>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/cleaning")}>
                <div className="service-item1"><img src={beauty3} alt="Hair Studio" /></div>
                <p className="service-text">Hair Studio for Women</p>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/electrician")}>
                <div className="service-item1"><img src={beauty4} alt="Makeup" /></div>
                <p className="service-text">Makeup & Styling Studio</p>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/waterpurifier")}>
                <div className="service-item1"><img src={men} alt="Salon Prime" /></div>
                <p className="service-text">Salon Prime</p>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/ac-repair")}>
                <div className="service-item1"><img src={beauty5} alt="Massage" /></div>
                <p className="service-text">Massage for Men</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-image-container">
          <img src={urban} alt="Beauty Service" className="home-image" />
        </div>
      </div>

      {/* RATINGS */}
      <div className="ratings-section">
        <div className="rating-box1">
          <img src={starImg} className="rating-icon" alt="rating" />
          <div><h4>4.8</h4><p>Service Rating*</p></div>
        </div>
        <div className="rating-box1">
          <img src={customerImg} className="rating-icon" alt="customers" />
          <div><h4>12M+</h4><p>Customers Globally*</p></div>
        </div>
      </div>

      {/* OFFER CAROUSEL */}
      <div className="carousel-container">
        <button className="arrow arrow-left" onClick={offerPrev}><HiArrowSmLeft /></button>
        <button className="arrow arrow-right" onClick={offerNext}><HiArrowSmRight /></button>
        <div className="carousel-wrapper">
          <div className="carousel-track" ref={offerRef}>
            {offerCards.map((card, index) => (
              <div
                key={index}
                className="carousel-card"
                style={{
                  flex: `0 0 calc((100% - ${(offerVisible - 1) * offerGap}px) / ${offerVisible})`,
                  marginRight: `${offerGap}px`,
                }}
              >
                <img src={card.image} alt={`Slide ${card.id}`} onClick={() => navigate(`/service/${card.id}`)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOST BOOKED CAROUSEL */}
      <div className="mostbooked-wrapper">
        <h2 className="mostbooked-heading">Most Booked Services</h2>
        <div className="mostbooked-carousel">
          {bookedIndex > 0 && <button className="mostbooked-arrow left" onClick={bookedPrev}><FaArrowLeft /></button>}
          {bookedIndex < mostBooked.length - bookedVisible && <button className="mostbooked-arrow right" onClick={bookedNext}><FaArrowRight /></button>}
          <div className="mostbooked-viewport">
            <div className="mostbooked-track" ref={bookedRef}>
              {mostBooked.map((item, index) => (
                <div
                  key={index}
                  className="mostbooked-item"
                  style={{
                    flex: `0 0 calc((100% - ${(bookedVisible - 1) * bookedGap}px) / ${bookedVisible})`,
                    marginRight: bookedGap,
                  }}
                >
                  <img src={item.image} alt={item.text} className="mostbooked-image" onClick={() => navigate(`/service/${item.id}`)} />
                  <p className="mostbooked-text">{item.text}</p>
                  <p className="mostbooked-rating">⭐ {item.rating} ({item.reviews})</p>
                  <p className="mostbooked-price">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SALON & SPA Sections */}
      <div className="salon-wrapper">
        <h2 className="salon-heading">Salon for Women</h2>
        <div className="salon-cards">
          {salonServices.map((item, index) => (
            <div key={index} className="salon-card" onClick={() => navigate(`/salon/${item.title.toLowerCase()}`)}>
              <img src={item.img} alt={item.title} />
              <p className="salon-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Walls image={beautywall} />

      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for Women</h2>
        <p className="spa-sub">Refresh. Rewind. Rejuvenate.</p>
        <div className="spa-cards">
          {spaServices.map((item, index) => (
            <div key={index} className="spa-card" onClick={() => navigate(`/spa/${item.title.toLowerCase().replace(/\s+/g, "-")}`)}>
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hair Services */}
      <div className="hair-wrapper">
        <div className="hair-header">
          <div>
            <h2 className="hair-main-heading">Hair services</h2>
            <p className="hair-sub-heading">Refreshed style, revamped look</p>
          </div>
          <button className="seeall-btn">See All</button>
        </div>
        <div className="hair-grid">
          {hairImages.map((item, index) => (
            <div className="hair-card" key={index}>
              <img src={item.img} alt="hair" />
              <p className="hair-title">{item.text}</p>
              <div className="hair-rating">{item.rating} <span>({item.reviews})</span></div>
              <p className="hair-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Wallpannels image={wall2} />

      <div className="spa-wrapper">
        <h2 className="spa-heading">Salon for Men</h2>
        <div className="spa-cards">
          {salonService.map((item, index) => (
            <div key={index} className="spa-card" onClick={() => navigate(item.path)}>
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Wallpannel image={wall3} />

      <div className="spa-wrapper">
        <h2 className="spa-heading">Spa for Men</h2>
        <p className="spa-sub">Curated massages by top therapists</p>
        <div className="spa-cards">
          {spaService.map((item, index) => (
            <div key={index} className="spa-card">
              <img src={item.img} alt={item.title} />
              <p className="spa-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Beauty;
