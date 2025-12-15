import React from "react";
import "./LoginModal.css";

export default function LoginModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="login-modal">

        <button className="close-btn" onClick={onClose}>×</button>

        <div className="login-head">
          <span className="phone-icon">📞</span>
          <h2>Enter your phone number</h2>
          <p>
            We’ll send you a text with a verification code.
            Standard tariff may apply.
          </p>
        </div>

        <div className="phone-input">
          <div className="country-code">+91</div>
          <input type="tel" placeholder="Enter your phone number" />
        </div>

        <div className="captcha-box">
          <span className="loading"></span>
          <span>Verifying...</span>

          <div className="cloudflare">
            <strong>CLOUDFLARE</strong>
            <p>Privacy · Terms</p>
          </div>
        </div>

        <button className="continue-btn" disabled>
          Continue
        </button>

        <p className="terms">
          By continuing, you agree to our <b>T&C</b> and <b>Privacy</b> policy.
        </p>

      </div>
    </div>
  );
}
