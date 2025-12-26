import React, { useState, useEffect, useRef } from "react";
import LoginModal from "../Pages/Loginmodel";
import "./LoginHoverBox.css";

export default function LoginHoverBox({ show, onClose }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ref = useRef();

  // Maintain login status
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") setIsLoggedIn(true);
  }, []);

  // Click outside to close hover
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show, onClose]);

  if (!show) return null;

  const handleLoginClick = () => {
    if (!isLoggedIn) setModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setModalOpen(false);
    alert("Logged out successfully");
    onClose?.(); // close hover
  };

  return (
    <div ref={ref} className="login-hover-box">
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

      {modalOpen && !isLoggedIn && (
        <LoginModal
          show={modalOpen}
          onClose={() => setModalOpen(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setModalOpen(false);
            onClose?.(); // close hover after login
          }}
        />
      )}
    </div>
  );
}
