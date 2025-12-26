import React, { useState, useEffect } from "react";
import LoginModal from "../Pages/Loginmodel";
import "./LoginHoverBox.css";

export default function LoginHoverBox({ show }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!show) return null;

  const handleLoginClick = () => {
    setModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // ✅ logout
    setIsLoggedIn(false);
    alert("Logged out successfully");
  };

  return (
    <div className="login-hover-box">
      {!isLoggedIn ? (
        <p className="login-hover-item" onClick={handleLoginClick}>
          Login
        </p>
      ) : (
        <>
          <p className="login-hover-item1">Help Center</p>
          <p className="login-hover-item1">My Bookings</p>
          <p className="login-hover-item1 logout" onClick={handleLogout}>
            Logout
          </p>
        </>
      )}

      {modalOpen && <LoginModal show={modalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  );
}
