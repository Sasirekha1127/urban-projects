// ViewCartPage.jsx
import React, { useRef, useState } from "react";
import "./ViewCartPage.css";
import uc from "../assets/UC.png";
import mini from "../assets/mini.png";
import mirror from "../assets/mirror-img.png";
import LoginModal from "../Pages/Loginmodel.jsx";

/* FREQUENTLY ADDED PRODUCTS */
const frequentlyAdded = [
  {
    id: "addon1",
    title: "Additional washbasin cleaning",
    price: 69,
    image: mini,
  },
  {
    id: "addon2",
    title: "Mirror cleaning (upto 1)",
    price: 59,
    image: mirror,
  },
];

export default function ViewCartPage({ cart = [], setCart = () => {} }) {
  const carouselRef = useRef(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  /* SCROLL HANDLERS */
  const scrollLeft = () => carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
  const scrollRight = () => carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });

  /* QTY HANDLERS */
  const increaseQty = (id) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  /* ADD ADDON → ADD TO TOP (DESCENDING) */
  const addAddonToCart = (addon) => {
    setCart([{ ...addon, qty: 1 }, ...cart]);
  };

  /* TOTAL AMOUNT */
  const totalAmount = cart.reduce((total, item) => total + item.price * item.qty, 0);

  /* VISIBLE ADDONS (NOT ALREADY ADDED) */
  const visibleAddons = frequentlyAdded.filter((addon) => !cart.some((item) => item.id === addon.id));

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
        {/* LEFT SIDE */}
        <div className="checkout-left">
          <div className="text">Saving ₹200 on this order</div>

          <div className="account-card">
            <h4>Account</h4>
            <p>To book the service, please login or sign up</p>
            <button className="login-btn" onClick={() => setShowLoginPopup(true)}>
              Login
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">
          {/* CART ITEMS (DESCENDING ORDER) */}
          {cart.map((item) => (
            <div className="service-cards" key={item.id}>
              <h5>{item.title}</h5>

              <div className="service-right">
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <div className="prices">₹{item.price * item.qty}</div>
              </div>
            </div>
          ))}

          {/* FREQUENTLY ADDED PRODUCTS */}
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
                        <button onClick={() => addAddonToCart(addon)}>Add</button>
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

          {/* PAYMENT SUMMARY */}
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
      <LoginModal show={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
    </>
  );
}
