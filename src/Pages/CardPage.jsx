import React from "react";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <div className="cart-page-container">
      <div className="cart-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty cart"
          className="cart-image"
        />
        <h4>Your cart is empty</h4>
        <p>Let’s add some services</p>
        <button
          className="explore-btn"
          onClick={() => navigate("/services")}
        >
          Explore services
        </button>
      </div>
    </div>
  );
}
