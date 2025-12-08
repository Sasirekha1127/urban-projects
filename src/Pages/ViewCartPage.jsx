// ViewCardPage.jsx
import React from "react";
import "../Pages/ViewCartPage.css";
import UC from "../assets/UC.png"; 

export default function ViewCardPage() {
  return (
    <div className="viewcard-container">
      <header className="viewcard-header">
        <img src={UC} alt="Urban Logo" className="urban-logo" />
      </header>

      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Bathroom Cleaning</h1>
        <p>All services and details related to bathroom cleaning will appear here.</p>
      </div>
    </div>
  );
}
