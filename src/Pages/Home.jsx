import React from "react";
import "../Pages/Home.css";
import urban from "../assets/urban.png";
import women from "../assets/women.png";
import cleaningImage from "../assets/cleaning.png";
import electricianImage from "../assets/electricion.png";
import waterpurifierImage from "../assets/waterpurifier.png";
import acImage from "../assets/ac repairs.png";
import men from "../assets/men.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-wrapper">
      {/* LEFT SIDE */}
      <div className="home-container">
        <h1>
          Home services at your <br /> doorstep
        </h1>

        <div className="home-box">
          <h3>What are you looking for?</h3>

          <div className="service-grid">
            {/* 1. Salon for Women */}
            <div className="service-group">
              <div
                className="service-item"
                onClick={() => handleNavigate("/salon")}
              >
                <div className="service-img">
                  <img src={women} alt="Salon" />
                </div>
              </div>
              <div className="service-text">
                <p>Salon for Women</p>
              </div>
            </div>

            {/* 2. Salon for Men */}
            <div className="service-group">
              <div
                className="service-item"
                onClick={() => handleNavigate("/men")}
              >
                <div className="service-img">
                  <img src={men} alt="Salon" />
                </div>
              </div>
              <div className="service-text">
                <p>Salon for Men</p>
              </div>
            </div>

            {/* 3. Cleaning */}
            <div className="service-group">
              <div
                className="service-item"
                onClick={() => handleNavigate("/cleaning")}
              >
                <div className="service-img">
                  <img src={cleaningImage} alt="Cleaning" />
                </div>
              </div>
              <div className="service-text">
                <p>Cleaning</p>
              </div>
            </div>

            {/* 4. Electricians */}
            <div className="service-group">
              <div
                className="service-item"
                onClick={() => handleNavigate("/electrician")}
              >
                <div className="service-img">
                  <img src={electricianImage} alt="Electrician" />
                </div>
              </div>
              <div className="service-text">
                <p>Electricians & Carpenters</p>
              </div>
            </div>

            {/* 5. Water Purifier */}
            <div className="service-group">
              <div
                className="service-item"
                onClick={() => handleNavigate("/waterpurifier")}
              >
                <div className="service-img">
                  <img src={waterpurifierImage} alt="Purifier" />
                </div>
              </div>
              <div className="service-text">
                <p>Native Water Purifier</p>
              </div>
            </div>

            {/* 6. AC Repair */}
            <div className="service-group">
              <div
                className="service-item"
                onClick={() => handleNavigate("/ac-repair")}
              >
                <div className="service-img">
                  <img src={acImage} alt="AC Repair" />
                </div>
              </div>
              <div className="service-text">
                <p>AC & Appliance Repair</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="home-image-container">
        <img src={urban} alt="Beauty Service" className="home-image" />
      </div>
    </div>
  );
}

export default Home;
