import React, { useState } from "react";
import "../pages/salonluxe.css";

import NavbarUC from "../components/Navbar";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

import bathroomVideo from "../assets/bathroomvideo.mp4";
import comboIcon from "../assets/combo.png";
import combobathrrom from "../assets/2bathroom.png";
import kitchenIcon from "../assets/kitchencleaning.png";
import miniIcon from "../assets/mini.png";
import bathroom from "../assets/bathroom.png";
import intense from "../assets/intense.png";

import uc from "../assets/ucpromise.png";
import miniservice from "../assets/mini-services.png";
import popup from "../assets/popup.mp4"

const SalonLuxe = () => {
  const [selectedService, setSelectedService] = useState(null);
const [showPopup, setShowPopup] = useState(false);
const [qty, setQty] = useState(1);
const [showAllOffers, setShowAllOffers] = useState(false);  

  const openPopup = (data) => {
    setSelectedService(data);
    setShowPopup(true);
  };


  const combos = [
    {
      title: "Intense cleaning (2 bathrooms)",
      price: 789,
      oldPrice: 1030,
      duration: "2 hrs 40 mins",
      perBathroom: 395,
      tag: "2 BATHROOMS",
      rating: "4.79 (3.7M reviews)",
      img: bathroom,
      desc: "Floor & tile cleaning with a scrub machine",
    },
    {
      title: "Intense cleaning (3 bathrooms)",
      price: 1159,
      oldPrice: 1557,
      duration: "4 hrs",
      perBathroom: 386,
      tag: "3 BATHROOMS",
      rating: "4.79 (3.7M reviews)",
      img: bathroom,
      desc: "Floor & tile cleaning with a scrub machine",
    },
  ];

  const miniServices = [
    {
      title: "Exhaust fan cleaning",
      price: 89,
      time: "15 mins",
      reviews: "97K",
      rating: "4.79",
      img: miniservice,
      desc: "Detailed cleaning of exhaust fan",
    },
    {
      title: "Additional washbasin cleaning",
      price: 69,
      time: "10 mins",
      reviews: "192K",
      rating: "4.82",
      img: miniservice,
      desc: "Deep cleaning for extra washbasin",
    },
  ];

  const offers = [
    { id: 1, title: "Mobikwik cashback up to ₹250", desc: "Via Mobikwik UPI Payment" },
    { id: 2, title: "Amazon cashback up to ₹125", desc: "Via Amazon Pay balance" },
    { id: 3, title: "Flat ₹100 Cashback", desc: "Via Mobikwik UPI" },
    { id: 4, title: "Up to ₹150 cashback", desc: "Valid for Paytm UPI only" },
  ];



  return (
    <div className="page-wrapper">
      <NavbarUC />
      {showPopup && selectedService && (
        <div className="popup-overlay">

          {/* CLOSE BUTTON */}
          <span className="close-btn" onClick={() => setShowPopup(false)}>✕</span>

          <div className="popup-box">

            {/* VIDEO */}
            <video src={popup} className="popup-full-img" autoPlay loop muted />

            {/* DETAILS */}
            <div className="popup-details">

              {/* LEFT SIDE */}
              <div className="details-left">
                <h2 className="popup-title">{selectedService.title}</h2>

                <p className="popup-rating">
                  <FaStar className="star-icon" /> {selectedService.rating}
                </p>

                <div className="popup-price-row">
                  <span className="new-price">₹{selectedService.price}</span>

                  {selectedService.oldPrice && (
                    <span className="old-price">₹{selectedService.oldPrice}</span>
                  )}

                  {selectedService.time && (
                    <span className="service-time">• {selectedService.time}</span>
                  )}
                </div>

                <p className="per-bath">
                  ₹{selectedService.price / 2} per bathroom
                </p>
              </div>

              {/* RIGHT SIDE BUTTON / QTY */}
              <div className="details-right">
                {qty === 0 ? (
                  <button className="popup-add-btn" onClick={() => setQty(1)}>
                    Add
                  </button>
                ) : (
                  <div className="qty-box">
                    <button onClick={() => setQty(prev => Math.max(prev - 1, 0))}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(prev => prev + 1)}>+</button>
                  </div>
                )}
              </div>

            </div>

            {/* BOTTOM TOTAL + DONE BUTTON */}
            {qty > 0 && (
              <div className="popup-bottom">
                <div className="popup-total">
                  <span>₹{selectedService.price * qty}</span>
                </div>

                <button className="popup-done-btn">
                  Done
                </button>
              </div> 
            )}

          </div>
        </div>
      )}

      const [showAllOffers, setShowAllOffers] = useState(false);

      <div className="uc-main-layout">
        {/* LEFT SIDE */}
        <div className="uc-left">
          <h1>Bathroom & Kitchen Cleaning</h1>

          <p className="rating">
            <FaStar style={{ color: "blue", display: "inline" }} /> 4.79{" "}
            <span>(8.7M bookings)</span>
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
            {/* LEFT COLUMN */}
            <div className="bottom-left">
              {/* COMBOS */}
              <h2 className="combos-heading">Combos</h2>

              {combos.map((combo, idx) => (
                <div key={idx} className="combo-card">
                  <div>
                    <h4 className="combo-title">{combo.title}</h4>
                    <p className="ratingss m-1">
                      <FaStar style={{ color: "blue" }} /> {combo.rating}
                    </p>
                    <p className="price m-1">
                      <span style={{ color: "green", fontWeight: "600" }}>₹{combo.price}</span>{" "}
                      <span className="old">₹{combo.oldPrice}</span> • {combo.duration}
                    </p>
                    <p className="green">₹{combo.perBathroom} per bathroom</p>
                    <p className="desc">{combo.desc}</p>
                  </div>

                  <div className="service-img-box">
                    <img src={combo.img} alt="" />
                    <button className="add-btn" onClick={() => openPopup(combo)}>Add</button>
                  </div>
                </div>
              ))}

              <hr />

              {/* BATHROOM CLEANING */}
              <h2 className="combos-heading" style={{ marginTop: "40px" }}>
                Bathroom cleaning
              </h2>

              <div className="combo-card">
                <div>
                  <h4 className="combo-title">Intense bathroom cleaning</h4>
                  <p className="ratingss m-1">
                    <FaStar style={{ color: "blue" }} /> 4.79 (3.7M reviews)
                  </p>
                  <p className="price m-1">
                    <span style={{ color: "green", fontWeight: "600" }}>Starts at ₹419</span>{" "}
                    <span className="old">₹519</span>
                  </p>
                  <p className="desc">Floor & tile cleaning with scrubbing machine</p>
                </div>

                <div className="service-img-box">
                  <img src={intense} alt="" />
                  <button
                    className="add-btn"
                    onClick={() =>
                      openPopup({
                        title: "Intense bathroom cleaning",
                        rating: "4.79 (3.7M reviews)",
                        price: 419,
                        oldPrice: 519,
                        img: intense,
                        desc: "Floor & tile cleaning with scrubbing machine",
                      })
                    }
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* MOVE-in card */}
              <div className="combo-card">
                <div>
                  <h4 className="combo-title">Move-in bathroom cleaning</h4>
                  <p className="ratingss m-1">
                    <FaStar style={{ color: "blue" }} /> 4.81 (1.1M reviews)
                  </p>
                  <p className="price m-1">
                    <span style={{ color: "green", fontWeight: "600" }}>Starts at ₹479</span>{" "}
                    <span className="old">₹579</span>
                  </p>
                  <p className="desc">Extra machine scrubbing included</p>
                </div>

                <div className="service-img-box">
                  <img src={intense} alt="" />
                  <button
                    className="add-btn"
                    onClick={() =>
                      openPopup({
                        title: "Move-in bathroom cleaning",
                        rating: "4.81 (1.1M reviews)",
                        price: 479,
                        oldPrice: 579,
                        img: intense,
                        desc: "Extra machine scrubbing included",
                      })
                    }
                  >
                    Add
                  </button>
                </div>
              </div>

              <hr />

              {/* MINI SERVICES */}
              <h2 className="combos-heading" style={{ marginTop: "40px" }}>
                Mini services
              </h2>

              {miniServices.map((item, i) => (
                <div key={i} className="combo-card">
                  <div>
                    <h4 className="combo-title">{item.title}</h4>
                    <p className="ratingss m-1">
                      <FaStar style={{ color: "blue" }} /> {item.rating} ({item.reviews} reviews)
                    </p>
                    <p className="price m-1">
                      <span style={{ fontWeight: "600" }}>₹{item.price}</span> • {item.time}
                    </p>
                  </div>

                  <div className="service-img-box">
                    <img src={item.img} alt="" />
                    <button className="add-btn" onClick={() => openPopup(item)}>Add</button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="bottom-right-wrapper">
              <div className="bottom-right">
                <div className="empty-cart">
                  <LuShoppingCart size={45} className="cart-icon" />
                  <p>No items in your cart</p>
                </div>

                <div className={`offers-container ${showAllOffers ? "expanded" : ""}`}>
                  {offers.slice(0, showAllOffers ? offers.length : 1).map((offer) => (
                    <div key={offer.id} className="offer-item">
                      <div className="offer-text">
                        <p className="offer-title">{offer.title}</p>
                        <p className="offer-sub">{offer.desc}</p>
                      </div>
                    </div>
                  ))}

                  <p className="view-more" onClick={() => setShowAllOffers(!showAllOffers)}>
                    {showAllOffers ? "View less ^" : "View more"}
                  </p>
                </div>

                {/* UC PROMISE */}
                <div className="uc-promise">
                  <div className="promise-header">
                    <h3>UC Promise</h3>
                    <img src={uc} alt="uc logo" className="promise-logo" />
                  </div>

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
