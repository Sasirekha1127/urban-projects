import React from "react";
import "./LoginHoverBox.css";

export default function LoginHoverBox({ show, onLoginClick }) {
  if (!show) return null;

  return (
    <div className="login-hover-box">
      <p className="login-hover-item" onClick={onLoginClick}>
        Login
      </p>
    </div>
  );
}
