import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginHoverBox.css";

export default function LoginHoverBox({ show }) {
  const navigate = useNavigate();

  if (!show) return null;

  const handleLoginClick = () => {
    // Navigate to View Cart page
    navigate("/view-cart");
  };

  return (
    <div className="login-hover-box">
      <p className="login-hover-item" onClick={handleLoginClick}>
        Login
      </p>
    </div>
  );
}
