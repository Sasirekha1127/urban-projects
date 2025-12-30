import React, { useState } from "react";
import { Overlay } from "react-bootstrap";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import bathroomImg from "../assets/bathroom.png";
import doorImg from "../assets/door.png";
import homeImg from "../assets/home.png";
import hair from "../assets/hair3.png"
import hair2 from "../assets/hair4.png"
import hair3 from "../assets/hair5.png"

import "./SearchBar.css";

export default function SearchDropdown({ target, show, handleClose, onServices }) {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const trending = [
  {
    text: "Professional bathroom cleaning",
    className: "trend-bathroom",
    subServices: [
      { name: "Bathroom cleaning", info: "3 services in Bathroom & Kitchen Cleaning", image: bathroomImg, link: "/salon/luxe" },
      { name: "Door cleaning (upto 1)", info: "4.8 (12k) ₹89 - Bathroom & Kitchen Cleaning", image: doorImg, link: "/salon/luxe" },
      { name: "Full home deep cleaning", info: "4.7 (8k) ₹899 - Full Home Deep Cleaning", image: homeImg, link: "/salon/luxe" }
    ]
  },
  {
    text: "Salon",
    className: "trend-salon",
    subServices: [
      { name: "Salon Luxe", image: hair , link: "/salon/luxe" },
      { name: "Salon Prime", image:hair2, link: "/salon/luxe" },
      { name: "Hair studio for Women", image: hair3, link: "/salon/women" }
    ]
  }
];


  const handleItemClick = (item) => {
    // Remove the navigate for "Salon"
    setSelectedService(item); // show subservices in dropdown
  };


  const handleSubServiceClick = (srv) => {
    handleClose();
    if (srv.link) navigate(srv.link);
    if (onServices) onServices(srv.name);
  };

  return (
    <Overlay
      target={target}
      show={!!show}
      rootClose
      onHide={handleClose}
      placement={window.innerWidth < 768 ? "bottom" : "bottom-start"}
      container={document.body}
    >
      {({ placement, ...overlayProps }) => {
        const targetWidth = target?.getBoundingClientRect()?.width || 0;

        return (
          <div
            ref={overlayProps.ref}
            style={{
              ...overlayProps.style,
              position: "absolute",

              width: window.innerWidth < 768 ? targetWidth + "px" : "320px",

              left: overlayProps.style.left,
              top: overlayProps.style.top,
              transform: overlayProps.style.transform,

              zIndex: 3000,
            }}
            className="search-dropdown-box"
          >


            <h6 className="fw-semibold mb-3">
              {selectedService ? "Available services" : "Trending searches"}
            </h6>

            {!selectedService && (
              <div className="trending-list">
                {trending.map((item, i) => (
                  <div
                    key={i}
                    className={`trending-item ${item.className}`}
                    onClick={() => handleItemClick(item)}
                  >
                    <FaArrowTrendUp className="trend-icon" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedService && (
              <div className="subservice-list">
                {selectedService.subServices.map((srv, i) => (
                  <div key={i} className="subservice-item" onClick={() => handleSubServiceClick(srv)}>
                    <img src={srv.image} alt={srv.name} />
                    <div>
                      <p>
                        <strong>{srv.name.split(" ")[0]}</strong>{" "}
                        {srv.name.replace(srv.name.split(" ")[0], "")}
                      </p>
                      <span>{srv.info}</span>
                    </div>
                  </div>
                ))}

                <button
                  className="btn btn-outline-dark btn-sm mt-3"
                  onClick={() => setSelectedService(null)}
                >
                  ← Back
                </button>
              </div>
            )}

          </div>
        )
      }}
    </Overlay>
  );
}
