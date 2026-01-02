import React, { useEffect, useRef, useState } from "react";
import "./Loginmodel.css";

export default function LoginModal({ show, onClose }) {
  const [phone, setPhone] = useState("");
  const [showVerifying, setShowVerifying] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [time, setTime] = useState(30);
  const inputsRef = useRef([]);

  const isValidPhone = phone.length === 10;
  const isOtpComplete = otp.every((d) => d !== "");

  useEffect(() => {
    if (show) {
      setPhone("");
      setShowOtpScreen(false);
      setShowVerifying(false);
      setOtp(["", "", "", "", "", ""]);
      setTime(30);
    }
  }, [show]);

  useEffect(() => {
    if (!showOtpScreen || time === 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [showOtpScreen, time]);

  const handleContinue = () => {
    if (!isValidPhone) return;
    setShowVerifying(true);
    setTimeout(() => {
      setShowVerifying(false);
      setShowOtpScreen(true);
      inputsRef.current[0]?.focus();
    }, 1000);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

 const handleVerifyOtp = () => {
  if (!isOtpComplete) return;

  alert("Login successful ✅");

  // ✅ Login status
  localStorage.setItem("isLoggedIn", "true");

  // ✅ Save phone number (ONLY ONCE)
  localStorage.setItem("userPhone", phone);

  // 🔔 Notify Navbar / Cart
  window.dispatchEvent(new Event("loginUpdated"));

  onClose(phone);
};

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-btns" onClick={onClose}>×</button>

        {!showOtpScreen && (
          <>
            <h2>Enter your phone number</h2>
            <p>We’ll send you a verification code</p>

            <div className="phone-input">
              <div className="country-code">+91</div>
              <input
                type="tel"
                maxLength="10"
                placeholder="Enter phone number"
                value={phone}
                disabled={showVerifying}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>

            {showVerifying && <p>Verifying...</p>}

            {!showVerifying && (
              <button
                className={`continue-btn ${isValidPhone ? "active" : ""}`}
                disabled={!isValidPhone}
                onClick={handleContinue}
              >
                Continue
              </button>
            )}
          </>
        )}

        {showOtpScreen && (
          <>
            <h2>Enter verification code</h2>
            <p>Code sent to +91 {phone}</p>

            <div className="otp-box">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputsRef.current[i] = el)}
                  type="tel"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              ))}
            </div>

            <p>⏱ 00:{time < 10 ? `0${time}` : time}</p>

            <button
              className={`login-btn ${isOtpComplete ? "active" : ""}`}
              disabled={!isOtpComplete}
              onClick={handleVerifyOtp}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
