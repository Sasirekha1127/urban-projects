import React, { useEffect, useState } from "react";
import "../Pages/Loginmodel.css";

export default function LoginModal({ show, onClose }) {
  const [phone, setPhone] = useState("");
  const [showVerifying, setShowVerifying] = useState(false);

  // 10 digit validation
  const isValidPhone = phone.length === 10;

  // 🔹 Popup open aana udane verifying show (1 sec)
  useEffect(() => {
    if (show) {
      setShowVerifying(true);

      const timer = setTimeout(() => {
        setShowVerifying(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  // 🔹 Continue click → verify again
  const handleContinue = () => {
    if (!isValidPhone) return;

    setShowVerifying(true);

    setTimeout(() => {
      setShowVerifying(false);
      // 👉 inga OTP screen later add pannalaam
    }, 1000);
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
              <button className="close-btns " onClick={onClose}>×</button>

      <div className="login-modal">


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
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            maxLength="10"
            disabled={showVerifying}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
          />
        </div>

        {/* VERIFYING */}
        {showVerifying && (
          <div className="captcha-box">
            <span className="loading"></span>
            <span>Verifying...</span>

            <div className="cloudflare">
              <strong>CLOUDFLARE</strong>
              <p>Privacy · Terms</p>
            </div>
          </div>
        )}

        {/*  CONTINUE BUTTON */}
        {!showVerifying && (
          <button
            className={`continue-btn ${isValidPhone ? "active" : ""}`}
            disabled={!isValidPhone}
            onClick={handleContinue}
          >
            Continue
          </button>
        )}

        <p className="terms">
          By continuing, you agree to our <b>T&C</b> and <b>Privacy</b> policy.
        </p>

      </div>
      
    </div>
    
  );
}
