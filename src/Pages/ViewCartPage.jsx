import React, { useRef, useState } from "react";
import "./ViewCartPage.css";
import uc from "../assets/UC.png";
import mini from "../assets/mini.png";
import mirror from "../assets/mirror-img.png";
import LoginModal from "../Pages/Loginmodel.jsx";



/* FREQUENTLY ADDED PRODUCTS */
const frequentlyAdded = [
  { id: "addon1", title: "Additional washbasin cleaning", price: 69, image: mini },
  { id: "addon2", title: "Mirror cleaning (upto 1)", price: 59, image: mirror },
];

export default function ViewCartPage({ cart, setCart }) {
  const carouselRef = useRef(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);


  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const addAddonToCart = (addon) => {
    setCart([...cart, { ...addon, qty: 1 }]);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const visibleAddons = frequentlyAdded.filter(
    addon => !cart.some(item => item.id === addon.id)
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
      {/* <hr className="navbar-lines" /> */}


      {/* CONTENT BELOW NAVBAR */}
      <div className="checkout-wrappers">

        {/* LEFT SIDE */}
        <div className="checkout-left">
          <div className="text">Saving ₹200 on this order</div>
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
        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">

          {/* SERVICE */}
          {cart.map(item => (
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

          {/* FREQUENTLY ADDED */}
          {visibleAddons.length > 0 && (
            <div className="addon-card">
              <h5>Frequently added together</h5>
              <div className="carousel-wrappers">
                <button className="arrows left" onClick={scrollLeft}>
                  &#10094;
                </button>

                <div className="addon-carousel" ref={carouselRef}>
                  {visibleAddons.map(addon => (
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

              <div className="addon-checkbox">
                <input type="checkbox" />
                <label>Avoid calling before reaching the location</label>
              </div>
            </div>
          )}
          {/* COUPONS */}
          <div className="coupon-card">
            <div className="coupon-head">
              <span className="coupon-icon">%</span>
              <div>
                <h5>Coupons and offers</h5>
                <p>Login/Sign up to view offers</p>
              </div>
            </div>
          </div>

          {/* PAYMENT SUMMARY */}
          <div className="payment-card">
            <h5>Payment summary</h5>

            <div className="pay-row">
              <span>Item total</span>
              <span>
                <del>₹1098</del> ₹{totalAmount}
              </span>
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

            <div className="pay-row pay">
              <span>Amount to pay</span>
              <span>₹{totalAmount + 69}</span>
            </div>
          </div>
          <div className="amount">
            <div className="amount-top">
              <h2>Amount to pay</h2>

              <div className="amount-right">
                <div className="amount-value">₹{totalAmount + 69}</div>
                <p
                  className="view-breakup"
                  onClick={() => setShowLoginPopup(true)}
                >
                  View breakup
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
      <LoginModal
        show={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
    
    </>
  );
}