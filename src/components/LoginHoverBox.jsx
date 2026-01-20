import React, { useState, useEffect, useRef } from "react";
import LoginModal from "../Pages/Loginmodel";
import "./LoginHoverBox.css";

export default function LoginHoverBox({ show, onClose, setCart }) {
  const [modalOpen, setModalOpen] = useState(false); // login modal
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ref = useRef();

  // Sync login state on mount & listen for global login events
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    checkLogin(); // initial check
    window.addEventListener("loginUpdated", checkLogin);
    return () => window.removeEventListener("loginUpdated", checkLogin);
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

  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    // Clear auth & user data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("userAddress");
    localStorage.removeItem("pincode");

    // Clear cart
    // localStorage.removeItem("cart");
    // if (setCart) setCart([]);
    

    // Update state immediately
    setIsLoggedIn(false);

    // Close hover
    onClose?.();

    // Optional alert
    alert("Logged out successfully ✅");

    // Notify other components
    window.dispatchEvent(new Event("loginUpdated"));
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
          <p className="login-hover-item1 logout" onClick={handleLogoutClick}>
            Logout
          </p>
        </>
      )}

      {/* Login modal */}
      {modalOpen && !isLoggedIn && (
        <LoginModal
          show={modalOpen}
          onClose={() => setModalOpen(false)}
          onLoginSuccess={() => {
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true); // updates icon immediately
            setModalOpen(false);
            onClose?.();
            window.dispatchEvent(new Event("loginUpdated"));
          }}
        />
      )}
    </div>
  );
}
