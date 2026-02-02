import React, { useRef, useState, useEffect } from "react";
import "./ViewCartPage.css";
import uc from "../assets/UC.png";
import mini from "../assets/mini.png";
import mirror from "../assets/mirror-img.png";
import LoginModal from "../Pages/Loginmodel.jsx";
import LocationBox from "../components/LocationBox.jsx";
import { useNavigate } from "react-router-dom";

import loginIcon from "../assets/login.png";

/* FREQUENTLY ADDED PRODUCTS */
const frequentlyAdded = [
  { id: "addon1", title: "Additional washbasin cleaning", price: 69, image: mini },
  { id: "addon2", title: "Mirror cleaning (upto 1)", price: 59, image: mirror },
];

export default function ViewCartPage({ cart = [], setCart = () => { } }) {
  const carouselRef = useRef(null);

  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLocationBox, setShowLocationBox] = useState(false);

  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");

  /* CHECK LOGIN STATUS */
  useEffect(() => {
    const syncLoginData = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";

      setIsLoggedIn(loggedIn);
      setUserPhone(localStorage.getItem("userPhone") || "");
      setUserAddress(localStorage.getItem("userAddress") || "");
    };

    // initial load
    syncLoginData();

    // listen login from anywhere (Navbar / HoverBox)
    window.addEventListener("loginUpdated", syncLoginData);

    return () => {
      window.removeEventListener("loginUpdated", syncLoginData);
    };
  }, []);


  /* SCROLL */
  const scrollLeft = () =>
    carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
  const scrollRight = () =>
    carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });

  /* QTY */
  const increaseQty = (id) => {
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  /* ADD ADDON */
  const addAddonToCart = (addon) => {
    setCart([{ ...addon, qty: 1 }, ...cart]);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const visibleAddons = frequentlyAdded.filter(
    (addon) => !cart.some((item) => item.id === addon.id)
  );

  return (
    <>
      {/* NAVBAR */}
      <div className="navbars">
        <div className="navbars-left d-flex">
          <img src={uc} alt="Urban Company Logo" className="logos" />
          <h3>Checkout</h3>
        </div>
      </div>

      <div className="checkout-wrappers">
        {/* LEFT */}
        <div className="checkout-left">
          <div className="saving-tag">
            <span>Saving ₹200 on this order</span>
          </div>

          {!isLoggedIn ? (
            <div className="account-card">
              <h4>Account</h4>
              <p>To book the service, please login or sign up</p>
              <button
                className="login-btn"
                onClick={() => setShowLoginPopup(true)}
              >
                Login
              </button>
            </div>
          ) : (
            <>
              {/* PHONE */}
              <div className="uc-box">
                <div className="uc-row">
                  <img src={loginIcon} alt="icon" className="uc-icon-img" />
                  <div>
                    <p className="uc-title">Send booking details to</p>
                    <p className="uc-sub">
                      {userPhone ? `+91 ${userPhone}` : "No phone number"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="uc-box">
                <div className="uc-row align-items-center">
                  <img src={loginIcon} alt="icon" className="uc-icon-img" />
                  <p className="uc-title mb-0">Address</p>

                  {/* RIGHT SIDE EDIT BUTTON */}
                  {userAddress && (
                    <button
                      className="btn btn-outline-secondary ms-auto"
                      onClick={() => setShowLocationBox(true)}
                    >
                      Edit
                    </button>
                  )}
                </div>

                {/* ADDRESS TEXT */}
                {userAddress && (
                  <p className="address-text mt-2 mb-2">
                    {userAddress}
                  </p>
                )}

                {/* SELECT ADDRESS BUTTON – ALWAYS SHOW */}
                <button
                  className="purple-btn full mt-2"
                  onClick={() => setShowLocationBox(true)}
                >
                  Select Address
                </button>
              </div>

              {/* PAYMENT */}
              <div className={`uc-box ${userAddress ? "" : "disabled"}`}>
                <div className="uc-row">
                  <span className="uc-icon">💳</span>
                  <p className="uc-title">Payment method</p>
                </div>
              </div>

              {/* PLACE ORDER */}
              {cart.length > 0 && (
                <div className="uc-box mt-3">
                  <button
                    className="purple-btn full"
                    disabled={!userPhone || !userAddress}
                    onClick={() => {
                      if (!userPhone || !userAddress) return;

                      // Show confirmation (alert)
                      alert("Order Placed Successfully!");

                      // Clear cart
                      // setCart([]);

                      // Redirect to home page
                      navigate("/");
                    }}
                  >
                    {userPhone && userAddress
                      ? "Place Order"
                      : "Add phone & address to place order"}
                  </button>

                </div>
              )}

            </>
          )}
        </div>

        {/* RIGHT */}
        <div className="checkout-right">
          {cart.map((item) => (
            <div className="service-cards" key={item.id}>
              <h5>{item.title}</h5>
              <div className="service-right">
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <div className="prices">
                  ₹{item.price * item.qty}
                </div>
              </div>
            </div>
          ))}

          {visibleAddons.length > 0 && (
            <div className="addon-card">
              <h5>Frequently added together</h5>
              <div className="carousel-wrappers">
                <button className="arrows left" onClick={scrollLeft}>
                  &#10094;
                </button>

                <div className="addon-carousel" ref={carouselRef}>
                  {visibleAddons.map((addon) => (
                    <div className="addon-slide" key={addon.id}>
                      <div className="addon-info">
                        <p>{addon.title}</p>
                        <span>₹{addon.price}</span>
                      </div>
                      <div className="addon-right">
                        <img src={addon.image} alt={addon.title} />
                        <button onClick={() => addAddonToCart(addon)}>
                          Add
                        </button>
                      </div> 
                    </div>
                  ))}
                </div>

                <button className="arrows right" onClick={scrollRight}>
                  &#10095;
                </button>
              </div>
            </div>
          )}

          <div className="payment-card">
            <h5>Payment summary</h5>
            <div className="pay-row">
              <span>Item total</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="pay-row">
              <span>Taxes and Fee</span>
              <span>₹69</span>
            </div>
            <hr />
            <div className="pay-row total">
              <span>Total amount</span>
              <span>₹{totalAmount + 69}</span>
            </div>
          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      <LoginModal
        show={showLoginPopup}
        onClose={(phone) => {
          setShowLoginPopup(false);

          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userPhone", phone || "");

          // 🔥 VERY IMPORTANT
          window.dispatchEvent(new Event("loginUpdated"));
        }}
      />


      <LocationBox
        show={showLocationBox}
        address={userAddress}
        onClose={(address) => {  // ✅ must be onClose
          if (address) {
            setUserAddress(address);
            localStorage.setItem("userAddress", address);
          }
          setShowLocationBox(false);
        }}
      />

    </>
  );
}
