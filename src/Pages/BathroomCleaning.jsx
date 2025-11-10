import React, { useRef, useState } from "react";
import { FaStar, FaPercent } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import bathroomVideo from "../assets/bathroomvideo.mp4";
import comboIcon from "../assets/combo.png";
import combobathrrom from "../assets/2bathroom.png"
import bathroomIcon from "../assets/bathroom.png";
import intense from "../assets/intense.png"
import kitchenIcon from "../assets/kitchencleaning.png";
import miniIcon from "../assets/mini.png";
import ucImg from "../assets/ucpromise.png";
import beforeafter from "../assets/before&after.jpg"
import "./BathroomCleaning.css";

function BathroomCleaning() {
  const videoRef = useRef(null);
  const comboRef = useRef(null);
  const bathroomRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [cartItems, setCartItems] = useState([]);




  const [isPlaying, setIsPlaying] = useState(false);
  const [showMoreOffers, setShowMoreOffers] = useState(false);
  const [activeService, setActiveService] = useState("bathroom");

  const handleAdd = (serviceName) => {
    const serviceDetails = {
      title: serviceName,
      // beforeImg: "/assets/before.jpg", // replace with correct path
      // afterImg: "/assets/after.jpg",   // replace with correct path
      rating: "4.79",
      reviews: "3.5M reviews",
      price: "950",
      duration: "2 hrs 40 mins",
      offer: "475",
    };
    setSelectedService(serviceDetails);
  };

  const closeModal = () => setSelectedService(null);






  // scroll to section
  const handleServiceClick = (service) => {
    setActiveService(service);

    if (service === "combos" && comboRef.current) {
      comboRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (service === "bathroom" && bathroomRef.current) {
      bathroomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // video play/pause
  const handleVideoClick = () => {
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
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
      {/* ---------- LEFT SIDE ---------- */}
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
            {[
              { id: "combos", img: comboIcon, name: "Combos" },
              { id: "bathroom", img: bathroomIcon, name: "Bathroom cleaning" },
              { id: "kitchen", img: kitchenIcon, name: "Kitchen cleaning" },
              { id: "mini", img: miniIcon, name: "Mini services" },
            ].map((item) => (
              <div
                key={item.id}
                className={`service-item ${activeService === item.id ? "active" : ""}`}
                onClick={() => handleServiceClick(item.id)}
              >
                <img src={item.img} alt={item.name} className="service-img1" />
                <p className="service-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- RIGHT SIDE ---------- */}
      <div className="bathroom-right">
        <div className="video-box">
          <video ref={videoRef} onClick={handleVideoClick} loop muted playsInline>
            <source src={bathroomVideo} type="video/mp4" />
          </video>
        </div>

        <div className="bottom-section">
          {/* LEFT SIDE: COMBOS */}
          <div className="combos-section" ref={comboRef}>
            <h3 className="combo-heading">Combos</h3>

            <div className="combo-cards">
              <div className="combo-card">
                <div className="combo-info">
                  <h4>Classic cleaning (2 bathrooms)</h4>
                  <p className="combo-rating"><FaStar /> 4.82 (1.5M reviews)</p>
                  <p className="combo-price">₹868 • 2 hrs</p>
                  <p className="bathroom-view">View details</p>
                  {cartItems.find((item) => item.title === "Classic cleaning (2 bathrooms)") ? (
                    <div className="uc-quantity-box">
                      <button
                        onClick={() =>
                          setCartItems((prev) =>
                            prev.map((item) =>
                              item.title === "Classic cleaning (2 bathrooms)"
                                ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                                : item
                            )
                          )
                        }
                      >
                        −
                      </button>
                      <span>
                        {cartItems.find((item) => item.title === "Classic cleaning (2 bathrooms)")?.quantity}
                      </span>
                      <button
                        onClick={() =>
                          setCartItems((prev) =>
                            prev.map((item) =>
                              item.title === "Classic cleaning (2 bathrooms)"
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                            )
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="add-btn" onClick={() => handleAdd("Classic cleaning (2 bathrooms)")}>
                      Add
                    </button>
                  )}

                </div>
                <div className="combo-img">
                  <img src={combobathrrom} alt="Classic Cleaning" />
                </div>
              </div>

              <div className="combo-card">
                <div className="combo-info">
                  <h4>Intense cleaning (3 bathrooms)</h4>
                  <p className="combo-rating"><FaStar /> 4.79 (1.2M reviews)</p>
                  <p className="combo-price">₹1268 • 3 hrs</p>
                  <p className="bathroom-view">View details</p>
                  {cartItems.find((item) => item.title === "Classic cleaning (2 bathrooms)") ? (
                    <div className="uc-quantity-box">
                      <button
                        onClick={() =>
                          setCartItems((prev) =>
                            prev.map((item) =>
                              item.title === "Classic cleaning (2 bathrooms)"
                                ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                                : item
                            )
                          )
                        }
                      >
                        −
                      </button>
                      <span>
                        {cartItems.find((item) => item.title === "Classic cleaning (3 bathrooms)")?.quantity}
                      </span>
                      <button
                        onClick={() =>
                          setCartItems((prev) =>
                            prev.map((item) =>
                              item.title === "Classic cleaning (3 bathrooms)"
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                            )
                          )
                        }
                      >
                        ＋
                      </button>
                    </div>
                  ) : (
                    <button className="add-btn" onClick={() => handleAdd("Classic cleaning (3 bathrooms)")}>
                      Add
                    </button>
                  )}

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
                      <img src={intense} alt="Intense Bathroom" />
                      <button className="add-btn2" onClick={() => handleAdd("Intense bathroom cleaning")}>
                        Add
                      </button>
                    </div>
                  </div>

                  <hr />


                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Cart + Offers */}
          <div className="right-info">
            {cartItems.length === 0 ? (
              <div className="no-card-box">
                <LuShoppingCart size={45} className="cart-icon" />
                <h4>No items in your cart</h4>
              </div>
            ) : (
              <div className="cart-box">
                <h4>Your Cart</h4>
                {cartItems.map((item) => (
                  <div key={item.title} className="cart-item">
                    <p>{item.title}</p>
                    <span>Qty: {item.quantity}</span>
                    <p>₹{item.price}</p>
                  </div>
                ))}
                <button className="checkout-btn">Go to Cart</button>
              </div>
            )}


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
              <button className="view-more-btn" onClick={() => setShowMoreOffers(!showMoreOffers)}>
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
      {selectedService && (
        <div className="uc-modal-overlay" onClick={closeModal}>
          <div className="uc-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="uc-close-btn" onClick={closeModal}>✕</button>

            {/* ---- IMAGE SECTION ---- */}
            <div className="uc-modal-images">
              <img src={beforeafter} alt="Before & After" />
            </div>

            {/* ---- INFO SECTION ---- */}
            <div className="uc-modal-info">
              <h3>{selectedService.title}</h3>
              <p className="uc-modal-rating">
                {selectedService.rating} ({selectedService.reviews})
              </p>
              <p className="uc-modal-price">
                ₹{selectedService.price} • {selectedService.duration}
              </p>
              <p className="uc-modal-offer">
                ₹{selectedService.offer} per bathroom
              </p>

              {/* ---- QUANTITY / ADD BUTTON ---- */}
              {selectedService.quantity ? (
                <div className="uc-quantity-box">
                  <button
                    onClick={() =>
                      setSelectedService((prev) => ({
                        ...prev,
                        quantity: prev.quantity > 1 ? prev.quantity - 1 : 0,
                      }))
                    }
                  >
                    −
                  </button>
                  <span>{selectedService.quantity}</span>
                  <button
                    onClick={() =>
                      setSelectedService((prev) => ({
                        ...prev,
                        quantity: prev.quantity + 1,
                      }))
                    }
                  >
                    ＋
                  </button>
                </div>
              ) : (
                <button
                  className="uc-add-btn"
                  onClick={() =>
                    setSelectedService((prev) => ({ ...prev, quantity: 1 }))
                  }
                >
                  Add
                </button>
              )}
            </div>

            {/* ---- DONE BUTTON ---- */}
            {selectedService.quantity > 0 && (
              <div className="uc-done-container">
                <button
                  className="uc-done-btn"
                  onClick={() => {
                    // Add or update the service in the cart
                    setCartItems((prev) => {
                      const exists = prev.find((item) => item.title === selectedService.title);
                      if (exists) {
                        return prev.map((item) =>
                          item.title === selectedService.title
                            ? { ...item, quantity: selectedService.quantity }
                            : item
                        );
                      } else {
                        return [...prev, selectedService];
                      }
                    });
                    closeModal();
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}


    </div>
  );
}

export default BathroomCleaning;
