import React, { useRef, useState } from "react";
import { FaStar, FaPercent } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import bathroomVideo from "../assets/bathroomvideo.mp4";
import comboIcon from "../assets/combo.png";
import bathroomIcon from "../assets/bathroom.png";
import kitchenIcon from "../assets/kitchencleaning.png";
import miniIcon from "../assets/mini.png";
import ucImg from "../assets/ucpromise.png";
import "./BathroomCleaning.css";

function BathroomCleaning() {
  const videoRef = useRef(null);
  const comboRef = useRef(null);
  const bathroomRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showMoreOffers, setShowMoreOffers] = useState(false);
  const [activeService, setActiveService] = useState("bathroom");

  // scroll when service clicked
  const handleServiceClick = (service) => {
    setActiveService(service);

    if (service === "combos" && comboRef.current) {
      setTimeout(() => {
        comboRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }

    if (service === "bathroom" && bathroomRef.current) {
      setTimeout(() => {
        bathroomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const offers = [
    { id: 1, title: "Mobikwik cashback up to ₹250", desc: "Via Mobikwik UPI Payment" },
    { id: 2, title: "Amazon cashback up to ₹125", desc: "Via Amazon Pay balance" },
    { id: 3, title: "Flat ₹100 Cashback", desc: "Via Mobikwik UPI" },
    { id: 4, title: "Up to ₹150 cashback", desc: "Valid for Paytm UPI only" },
  ];

  const visibleOffers = showMoreOffers ? offers : offers.slice(0, 1);

  return (
    <div className="bathroom-wrapper">
      {/* ---------- LEFT SIDE (STATIC SERVICES) ---------- */}
      <div className="bathroom-left">
        <h2 className="bathroom-title">
          Bathroom &<br /> Kitchen Cleaning
        </h2>

        <div className="rating-box">
          <FaStar />
          <span>4.78 (8.6 M bookings)</span>
        </div>

        <div className="service-container">
          <div className="service-heading-wrapper">
            <h5 className="service-heading">Select a service</h5>
            <div className="heading-line"></div>
          </div>

<div className="service-list">
  <div
    className={`service-item ${activeService === "combos" ? "active" : ""}`}
    onClick={() => handleServiceClick("combos")}
  >
    <img
      src={comboIcon}
      alt="Combo"
      className={`service-img ${activeService === "combos" ? "active" : ""}`}
    />
    <p className="service-name">Combos</p>
  </div>

  <div
    className={`service-item ${activeService === "bathroom" ? "active" : ""}`}
    onClick={() => handleServiceClick("bathroom")}
  >
    <img
      src={bathroomIcon}
      alt="Bathroom"
      className={`service-img ${activeService === "bathroom" ? "active" : ""}`}
    />
    <p className="service-name">Bathroom cleaning</p>
  </div>

  <div
    className={`service-item ${activeService === "kitchen" ? "active" : ""}`}
    onClick={() => handleServiceClick("kitchen")}
  >
    <img
      src={kitchenIcon}
      alt="Kitchen"
      className={`service-img ${activeService === "kitchen" ? "active" : ""}`}
    />
    <p className="service-name">Kitchen cleaning</p>
  </div>

  <div
    className={`service-item ${activeService === "mini" ? "active" : ""}`}
    onClick={() => handleServiceClick("mini")}
  >
    <img
      src={miniIcon}
      alt="Mini"
      className={`service-img ${activeService === "mini" ? "active" : ""}`}
    />
    <p className="service-name">Mini services</p>
  </div>
</div>
</div>
</div>

      {/* ---------- RIGHT SIDE (VIDEO + BELOW DIV) ---------- */}
      <div className="bathroom-right">
        <div className="video-box">
          <video
            ref={videoRef}
            onClick={handleVideoClick}
            loop
            muted
            playsInline
          >
            <source src={bathroomVideo} type="video/mp4" />
          </video>
        </div>

        {/* ---------- BELOW VIDEO: COMBOS + RIGHT INFO ---------- */}
        <div className="bottom-section">
          {/* LEFT SIDE: Combos + Bathroom Cleaning */}
          <div className="combos-section" ref={comboRef}>
            <h3 className="combo-heading">Combos</h3>

            <div className="combo-cards">
              {/* Combo 1 */}
              <div className="combo-card">
                <div className="combo-info">
                  <h4>Classic cleaning (2 bathrooms)</h4>
                  <p className="combo-rating"><FaStar /> 4.82 (1.5M reviews)</p>
                  <p className="combo-price">₹868 • 2 hrs</p>
                  <button className="add-btn">Add</button>
                </div>
                <div className="combo-img">
                  <img src={bathroomIcon} alt="Classic Cleaning" />
                </div>
              </div>

              {/* Combo 2 */}
              <div className="combo-card">
                <div className="combo-info">
                  <h4>Intense cleaning (3 bathrooms)</h4>
                  <p className="combo-rating"><FaStar /> 4.79 (1.2M reviews)</p>
                  <p className="combo-price">₹1268 • 3 hrs</p>
                  <button className="add-btn">Add</button>
                </div>
                <div className="combo-img">
                  <img src={bathroomIcon} alt="Intense Cleaning" />
                </div>
              </div>

              <hr />

              {/* Bathroom Cleaning Section */}
              <div className="bathroom-cleaning-section" ref={bathroomRef}>
                <h3 className="bathroom-cleaning-heading">Bathroom cleaning</h3>

                <div className="bathroom-cards">
                  {/* Intense Bathroom Cleaning */}
                  <div className="bathroom-card">
                    <div className="bathroom-left-info">
                      <p className="bestseller">BESTSELLER</p>
                      <h4>Intense bathroom cleaning</h4>
                      <p className="bathroom-rating"><FaStar /> 4.79 (4.2M reviews)</p>
                      <p className="bathroom-price">Starts at <b>₹549</b> • 1 hr 20 mins</p>
                      <ul className="bathroom-points">
                        <li>Floor & tile cleaning with scrubbing machine</li>
                        <li>Recommended for deep-cleaning and tough stains</li>
                      </ul>
                      <p className="bathroom-view">View details</p>
                    </div>

                    <div className="bathroom-right-img">
                      <img src={bathroomIcon} alt="Intense Bathroom" />
                      <button className="add-btn2">Add</button>
                    </div>
                  </div>

                  <hr />

                  {/* Classic Bathroom Cleaning */}
                  <div className="bathroom-card">
                    <div className="bathroom-left-info">
                      <h4>Classic bathroom cleaning</h4>
                      <p className="bathroom-rating"><FaStar /> 4.82 (2.2M reviews)</p>
                      <p className="bathroom-price">Starts at <b>₹469</b> • 60 mins</p>
                      <ul className="bathroom-points">
                        <li>Floor & tile cleaning with hand scrubbing</li>
                        <li>Recommended for regular maintenance cleaning</li>
                      </ul>
                      <p className="bathroom-view">View details</p>
                    </div>

                    <div className="bathroom-right-img">
                      <img src={bathroomIcon} alt="Classic Bathroom" />
                      <button className="add-btn2">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Cart + Offers + UC Promise */}
          <div className="right-info">
            <div className="no-card-box">
              <LuShoppingCart size={45} className="cart-icon" />
              <h4>No items in your cart</h4>
            </div>

            <div className="offer-box">
              {visibleOffers.map((offer) => (
                <div key={offer.id} className="offer-item">
                  <FaPercent className="offer-icon" />
                  <div>
                    <h4>{offer.title}</h4>
                    <p>{offer.desc}</p>
                  </div>
                </div>
              ))}
              <button
                className="view-more-btn"
                onClick={() => setShowMoreOffers(!showMoreOffers)}
              >
                {showMoreOffers ? "View Less Offers ↑" : "View More Offers ↓"}
              </button>
            </div>

            <div className="uc-promise">
              <div className="uc-text">
                <h4>UC Promise</h4>
                <ul>
                  <li><IoMdCheckmark /> Verified Professionals</li>
                  <li><IoMdCheckmark /> Safe Chemicals</li>
                  <li><IoMdCheckmark /> Superior Stain Removal</li>
                </ul>
              </div>
              <div className="uc-img">
                <img src={ucImg} alt="UC Promise" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BathroomCleaning;
