import React, { useState, useEffect } from "react";
import "../Pages/Home.css";

// Assets
import urban from "../assets/urban.png";
import women from "../assets/women.png";
import men from "../assets/men.png";
import cleaningImage from "../assets/cleaning.png";
import electricianImage from "../assets/electricion.png";
import waterpurifierImage from "../assets/waterpurifier.png";
import acImage from "../assets/ac repairs.png";
import customerImg from "../assets/customer.png";
import starImg from "../assets/star.png";

// Libraries
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import ApplianceSection from "../Pages/Appliance.jsx";
import Footer from "./Footer.jsx";
import Carouselpage from "../components/Carouselpage.jsx";
import Newnote from "../components/Newnote.jsx";
import Mostbook from "../components/Mostbook.jsx";
import Walls from "../components/Walls.jsx";
import Salon from "../components/Salon.jsx";
import Wallpannel from "../components/Wallpannel.jsx";
import CleaningPest from "../components/Cleaningpest.jsx";
import Wallpannels from "../components/Wallpannels.jsx";
import Salonmen from "../components/Salonmen.jsx";

// Modals
import LoginModal from "../Pages/Loginmodel.jsx";
import LocationBox from "../components/LocationBox.jsx";

function Home() {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [address, setAddress] = useState(localStorage.getItem("userAddress") || "");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Optional: listen for updated address from LocationBox
  useEffect(() => {
    const handleAddressUpdate = () => {
      const addr = localStorage.getItem("userAddress") || "";
      setAddress(addr);
    };

    window.addEventListener("addressUpdated", handleAddressUpdate);

    return () => {
      window.removeEventListener("addressUpdated", handleAddressUpdate);
    };
  }, []);

  // Navigate handler
  const handleNavigate = (path) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }

    // Navigate directly without opening LocationBox
    navigate(path);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userAddress");
    window.location.reload();
  };

  return (
    <>
      {/* ---------- HOME SECTION ---------- */}
      <div className="home-wrapper">
        <div className="home-container">
          <h1>Home services at your <br /> doorstep</h1>

          <div className="home-box">
            <h3>What are you looking for?</h3>
            <div className="service-grid">
              <div className="service-group" onClick={() => handleNavigate("/salon/luxe")}>
                <div className="service-item1"><img src={women} alt="Salon for Women" /></div>
                <div className="service-text"><p>Salon for Women</p></div>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/salon/luxe")}>
                <div className="service-item1"><img src={men} alt="Salon for Men" /></div>
                <div className="service-text"><p>Salon for Men</p></div>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/salon/luxe")}>
                <div className="service-item1"><img src={cleaningImage} alt="Cleaning" /></div>
                <div className="service-text"><p>Cleaning</p></div>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/salon/luxe")}>
                <div className="service-item1"><img src={electricianImage} alt="Electrician" /></div>
                <div className="service-text"><p>Electricians & Carpenters</p></div>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/salon/luxe")}>
                <div className="service-item1"><img src={waterpurifierImage} alt="Purifier" /></div>
                <div className="service-text"><p>Native Water Purifier</p></div>
              </div>
              <div className="service-group" onClick={() => handleNavigate("/salon/luxe")}>
                <div className="service-item1"><img src={acImage} alt="AC Repair" /></div>
                <div className="service-text"><p>AC & Appliance Repair</p></div>
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
          <img src={starImg} alt="rating" />
          <div><h4>4.8</h4><p>Service Rating*</p></div>
        </div>
        <div className="rating-box1">
          <img src={customerImg} alt="customers" />
          <div><h4>12M+</h4><p>Customers Globally*</p></div>
        </div>
      </div>

      {/* OTHER COMPONENTS */}
      <Carouselpage />
      <Newnote />
      <Mostbook />
      <Walls />
      <Salon />
      <Wallpannel />
      <CleaningPest />
      <Wallpannels />
      <ApplianceSection />
      <Salonmen />
      <Footer />

      {/* MODALS */}
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
      <LocationBox
        show={showAddress}
        onClose={(addr) => {
          if (addr) setAddress(addr);
          setShowAddress(false);
        }}
      />
    </>
  );
}

export default Home;
