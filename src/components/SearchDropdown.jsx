import React, { useState } from "react";
import { Overlay } from "react-bootstrap";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import bathroomImg from "../assets/bathroom.png"
import doorImg from "../assets/door.png"
import homeImg from "../assets/home.png"
import "./SearchBar.css";

export default function SearchDropdown({ target, show, handleClose,onServies }) {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // Trending list with navigation links
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
    {
      text: "Professional kitchen cleaning",
      className: "trend-kitchen",
      subServices: [
        {
          name: "Kitchen cleaning",
          info: "4 services in Bathroom & Kitchen Cleaning",
          image: "/images/kitchen.jpg",
        },
        {
          name: "Sofa cleaning",
          info: "1 service in Sofa & Carpet Cleaning",
          image: "/images/sofa.jpg",
        },
        {
          name: "Carpet cleaning",
          info: "1 service in Sofa & Carpet Cleaning",
          image: "/images/carpet.jpg",
        },
        {
          name: "Full home deep cleaning",
          info: "4.7 (8k) ₹899 - Full Home Deep Cleaning",
          image: "/images/deepclean.jpg",
        },
      ],
    },
  ];

  //  When a main trending item clicked
  const handleItemClick = (item) => {
    if (item.text === "Salon") {
      handleClose();
      navigate("/salon");
    } else {
      setSelectedService(item);
    }
  };

  //  When a subservice is clicked
  const handleSubServiceClick = (srv) => {
    handleClose(); 
    if (srv.link)
      navigate(srv.link);
    if(onServies){
      onserviesSelect(srv.name);
     //  navigate to linked page
    }
  };

  return (
    <Overlay
      target={target}
      show={!!show}
      placement="bottom-start"
      rootClose
      onHide={() => {
        handleClose();
        setSelectedService(null);
      }}
    >
      {({ ...props }) => (
        <div {...props} className="search-dropdown-box" style={props.style}>
          {/* Header */}
          <h6 className="fw-semibold mb-3">
            {selectedService ? "Available services" : "Trending searches"}
          </h6>

          {/*  Main Trending list */}
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

          {/* Subservices list (Urban Company style) */}
          {selectedService && (
            <div className="subservice-list">
              {selectedService.subServices.map((srv, i) => (
                <div
                  key={i}
                  className="subservice-item"
                  onClick={() => handleSubServiceClick(srv)} 
                >
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
