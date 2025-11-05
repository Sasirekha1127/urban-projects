import React from "react";
import salonBanner from "../assets/salon.mp4"

function SalonPage() {
  return (
    <div className="salon-wrapper">
      <h1>Salon for Women</h1>
      <p>⭐ 4.85 (15.6M bookings)</p>

      <div className="salon-banner">
        <img src={salonBanner} alt="Salon Service" />
      </div>

      <div className="salon-services">
        <h3>Select a Service</h3>
        <div className="service-grid">
          <div className="service-card">Wedding essentials</div>
          <div className="service-card">Super Saver Packages</div>
          <div className="service-card">Waxing & Threading</div>
          <div className="service-card">Cleanup</div>
          <div className="service-card">Pedicure & Manicure</div>
        </div>
      </div>
    </div>
  );
}

export default SalonPage;
