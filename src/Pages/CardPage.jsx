import React from "react";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import card from "../assets/card.png"
import { LuArrowLeft } from "react-icons/lu";



export default function CartPage({ cart = [], setCart = () => { } }) {
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, (item.qty || 1) - 1) } : item
      )
    );
  };

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty cart"
          className="cart-image"
        />
        <h3>Your cart is empty</h3>
        <p>Let’s add some services</p>
        <button className="explore-btn" onClick={() => navigate("/")}>
          Explore Services
        </button>
      </div>
    );
  }

  return (
   <>
  {/* Back button */}
  <div className="uc-back-btn" onClick={() => navigate(-1)}>
    <LuArrowLeft size={24} /> 
  </div>

  {/* Cart header row */}
  <div className="cart-header-row">
    <LuShoppingCart size={40} className="cart-icons" />
    <h1 className="uc-cart-title">Your Cart</h1>
  </div>
  <hr className="lines" />

  {/* Cart items */}
  {cart.map((item) => (
    <div className="uc-cart-card" key={item.id}>
      <img src={card} alt={item.title} className="uc-cart-img" />
      <div className="uc-cart-info">
        <h2 className="uc-cart-item-title">{item.title}</h2>
        <p className="uc-cart-subtitle">
          {item.qty} service{item.qty > 1 ? "s" : ""} • ₹{item.price * item.qty}
        </p>
      </div>
    </div>
  ))}

  {/* Checkout buttons */}
  <div className="uc-checkout-wrapper">
    <button
      className="uc-addservice-btn-outline"
      onClick={() => navigate("/")}
    >
      Add Services
    </button>
    <button className="uc-checkout-btn"   onClick={() => navigate("/view-cart")}>

      Checkout
    </button>
  </div>
</>
  );
}
