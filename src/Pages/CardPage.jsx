import React from "react";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";

export default function CartPage({ cart, setCart }) {
  const navigate = useNavigate();

  // Increase quantity
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
      .filter((item) => item.qty > 0);

    setCart(updated);
  };

  // Remove one item
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  // Total calculation
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page-container">

      {/* If cart is empty */}
      {cart.length === 0 ? (
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
      ) : (
        <div className="cart-filled">

          <h2>Your Cart</h2>

          {/* Cart Items */}
          {cart.map((item) => (
            <div key={item.id} className="cart-item-box">
              
              {/* Item Image */}
              <img src={item.image} className="cart-item-img" alt="" />

              {/* Item Details */}
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p className="price">₹{item.price}</p>

                {/* Quantity */}
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                {/* Remove */}
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="cart-total-box">
            <h3>Total: ₹{total}</h3>
            <button className="btn-checkout">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
