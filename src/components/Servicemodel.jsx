import React from "react";
import beforeafter from "../assets/before&after.jpg";
import "../components/servicemodel.css"

function ServiceModal({ service, closeModal, updateQuantity }) {
  if (!service) return null;

  return (
    <div className="uc-modal-overlay" onClick={closeModal}>
      <div className="uc-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="uc-close-btn" onClick={closeModal}>✕</button>

        {/* IMAGE */}
        <div className="uc-modal-images">
          <img src={beforeafter} alt="Before & After" />
        </div>

        {/* INFO */}
        <div className="uc-modal-info">
          <h3>{service.title}</h3>
          <p className="uc-modal-rating">
            {service.rating} ({service.reviews})
          </p>
          <p className="uc-modal-price">
            ₹{service.price} • {service.duration}
          </p>
          <p className="uc-modal-offer">
            ₹{service.offer} per bathroom
          </p>

          {/* QUANTITY CONTROLS */}
          {service.quantity ? (
            <div className="uc-quantity-box">
              <button onClick={() => updateQuantity(-1)}>−</button>
              <span>{service.quantity}</span>
              <button onClick={() => updateQuantity(1)}>＋</button>
            </div>
          ) : (
            <button className="uc-add-btn" onClick={() => updateQuantity(1)}>
              Add
            </button>
          )}
        </div>

        {/* DONE BUTTON */}
        {service.quantity > 0 && (
          <div className="uc-done-container">
            <button className="uc-done-btn" onClick={closeModal}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceModal;
