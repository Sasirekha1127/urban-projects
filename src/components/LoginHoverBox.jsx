// components/LoginHoverBox.jsx
import React from "react";
import "./LoginHoverBox.css";

export default function LoginHoverBox({ show, handleLoginClick }) {
  if (!show) return null;

  return (
    <div className="login-hover-box">
      <p onClick={handleLoginClick} className="login-hover-item">
        Login
      </p>
    </div>
  );
}
