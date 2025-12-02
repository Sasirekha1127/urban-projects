import React from "react";
import "../pages/salonluxe.css";

import NavbarUC from "../components/Navbar";

import bathroomVideo from "../assets/bathroomvideo.mp4";
import comboIcon from "../assets/combo.png";
import combobathrrom from "../assets/2bathroom.png";
import kitchenIcon from "../assets/kitchencleaning.png";
import miniIcon from "../assets/mini.png";

const SalonLuxe = () => {
  const combos = [
    {
      title: "Intense cleaning (2 bathrooms)",
      price: 789,
      oldPrice: 1030,
      duration: "2 hrs 40 mins",
      perBathroom: 395,
      tag: "2 BATHROOMS",
    },
    {
      title: "Intense cleaning (3 bathrooms)",
      price: 1159,
      oldPrice: 1557,
      duration: "4 hrs",
      perBathroom: 386,
      tag: "3 BATHROOMS",
    },
  ];

  return (
    <div className="page-wrapper">
      <NavbarUC />

      {/* TOP SECTION LEFT + RIGHT */}
      <div className="uc-main-layout">
        {/* LEFT SIDE */}
        <div className="uc-left">
          <h1>Bathroom & Kitchen Cleaning</h1>

          <p className="rating">
            ⭐ 4.79 <span>(8.7M bookings)</span>
          </p>

          <div className="service-wrapper">
            <h4 className="service-title">Select a service</h4>
            <div className="headings-line"></div>

            <div className="service-grid">
              <div className="service-box">
                <img src={comboIcon} alt="combo" />
                <p>Combos</p>
              </div>

              <div className="service-box">
                <img src={combobathrrom} alt="bathroom" />
                <p>Bathroom cleaning</p>
              </div>

              <div className="service-box">
                <img src={kitchenIcon} alt="kitchen" />
                <p>Kitchen cleaning</p>
              </div>

              <div className="service-box">
                <img src={miniIcon} alt="mini" />
                <p>Mini services</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE VIDEO */}
        
        <div className="uc-right">
          <video src={bathroomVideo} autoPlay muted loop className="hero-video" />
        </div>

      {/* BOTTOM SECTION */}
      <div className="bottom-layout-wrapper">
        <div className="bottom-layout">
          {/* LEFT COLUMN — COMBOS LIST */}
          <div className="bottom-left">
            <h2 className="combos-heading">Combos</h2>

            {combos.map((combo, idx) => (
              <div key={idx} className="combo-card">
                <div>
                  <h4>{combo.title}</h4>
                  <p className="rating">⭐ 4.79 (3.7M reviews)</p>
                  <p className="price">
                    ₹{combo.price} <span className="old">₹{combo.oldPrice}</span> • {combo.duration}
                  </p>
                  <p className="green">₹{combo.perBathroom} per bathroom</p>
                  <p className="desc">Floor & tile cleaning with a scrub machine</p>
                  <p className="view-details">View details</p>
                </div>

                <div className="service-img-box">
                  <span className="tag">{combo.tag}</span>
                  <img src={combobathrrom} alt="" />
                  <button className="add-btn">Add</button>
                </div>
              </div>
            ))}
          </div>


          {/* RIGHT COLUMN — SIDEBAR */}
          <div className="bottom-right-wrapper">
            <div className="bottom-right">
              <div className="empty-cart">
                <p>No items in your cart</p>
              </div>

              <div className="offers-box">
                <p className="offer-title">Mobikwik cashback up to ₹250</p>
                <p className="offer-sub">Via Mobikwik UPI Payment</p>
                <p className="view-more">View more offers ▼</p>
              </div>

              <div className="uc-promise">
                <h3>UC Promise</h3>
                <ul>
                  <li>✔ Verified Professionals</li>
                  <li>✔ Hassle Free Booking</li>
                  <li>✔ Transparent Pricing</li>
                </ul>
                            
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>

  );
};

export default SalonLuxe;
