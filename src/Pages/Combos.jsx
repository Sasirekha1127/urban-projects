import React from "react";
import { FaStar } from "react-icons/fa";
import combobathrrom from "../assets/2bathroom.png";
import bathroomIcon from "../assets/bathroom.png";

const Combos = ({ cartItems, setCartItems, handleAdd, comboRef }) => {
  return (
    <div className="combos-section" ref={comboRef}>
      <h3 className="combo-heading">Combos</h3>

      <div className="combo-cards">
        {/* ---- CARD 1 ---- */}
        <div className="combo-card">
          <div className="combo-info">
            <h4>Classic cleaning (2 bathrooms)</h4>
            <p className="combo-rating"><FaStar /> 4.82 (1.5M reviews)</p>
            <p className="combo-price">₹868 • 2 hrs</p>
            <p className="bathroom-view">View details</p>

            {/* Quantity / Add Button */}
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
            <img src={combobathrrom} alt="Combo" />
          </div>
        </div>

        {/* ---- CARD 2 ---- */}
        <div className="combo-card">
          <div className="combo-info">
            <h4>Intense cleaning (3 bathrooms)</h4>
            <p className="combo-rating"><FaStar /> 4.79 (1.2M reviews)</p>
            <p className="combo-price">₹1268 • 3 hrs</p>
            <p className="bathroom-view">View details</p>

            <button className="add-btn" onClick={() => handleAdd("Intense cleaning (3 bathrooms)")}>
              Add
            </button>
          </div>

          <div className="combo-img">
            <img src={bathroomIcon} alt="Intense" />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Combos;
