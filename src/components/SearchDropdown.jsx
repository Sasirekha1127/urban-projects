import React, { useState } from "react";
import { Overlay } from "react-bootstrap";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import bathroomImg from "../assets/bathroom.png";
import doorImg from "../assets/door.png";
import homeImg from "../assets/home.png";
import "./SearchBar.css";

export default function SearchDropdown({ target, show, handleClose, onServices }) {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const trending = [
    {
      text: "Professional bathroom cleaning",
      className: "trend-bathroom",
      subServices: [
        {
          name: "Bathroom cleaning",
          info: "3 services in Bathroom & Kitchen Cleaning",
          image: bathroomImg,
          link: "/bathroom-cleaning",
        },
        {
          name: "Door cleaning (upto 1)",
          info: "4.8 (12k) ₹89 - Bathroom & Kitchen Cleaning",
          image: doorImg,
        },
        {
          name: "Full home deep cleaning",
          info: "4.7 (8k) ₹899 - Full Home Deep Cleaning",
          image: homeImg,
        },
      ],
    },
    {
      text: "Salon",
      className: "trend-salon",
      subServices: [
        {
          name: "Haircut",
          info: "4.9 (15k) ₹199 - Men's Haircut",
          image: "/images/haircut.jpg",
        },
        {
          name: "Facial",
          info: "4.8 (10k) ₹499 - Basic Facial",
          image: "/images/facial.jpg",
        },
        {
          name: "Waxing",
          info: "4.7 (8k) ₹299 - Half Leg Waxing",
          image: "/images/waxing.jpg",
        },
      ],
    },
  ];

  const handleItemClick = (item) => {
    if (item.text === "Salon") {
      handleClose();
      navigate("/salon");
    } else {
      setSelectedService(item);
    }
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
      popperConfig={{
        modifiers: [
          {
            name: "offset",
            options: { offset: [0, 12] },
          },
        ],
      }}
    >
      {({ placement, ...overlayProps }) => (
        <div
          ref={overlayProps.ref}
          style={{
            ...overlayProps.style,
            width: window.innerWidth < 768 ? "100%" : "22%",
            left: window.innerWidth < 768 ? 0 : overlayProps.style.left,
            transform: window.innerWidth < 768 ? "none" : overlayProps.style.transform,
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
      )}
    </Overlay>
  );
}
