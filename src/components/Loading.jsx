import React from "react";
import logo from "../assets/logo.png"
import "./Loading.css";

export default function LoadingScreen() {
  return (
    <div className="loading-wrapper">
      <div className="uc-logo">
        <img src={logo} alt="Loading..." />
      </div>

      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
}
