import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { NavLink, useNavigate } from "react-router-dom";

import LocationBox from "./LocationBox";
import SearchDropdown from "./SearchDropdown";
import LoginPopup from "./LoginHoverBox";

import logo from "../assets/logo.png";
import "./navbar.css";

function NavbarUC() {
  const [showLocation, setShowLocation] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const word = ['facial', 'Ketchen cleaning', 'AC cleaning'];
  const [placeholder, setPlaceholder] = useState('service');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    let typeSpeed = 90;
    const currentword = word[index];

    const handling = () => {
      if (!isDeleting) {
        setPlaceholder((p) => {
          const updated = currentword.substring(0, p.length + 1);
          if (updated === currentword) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
          return updated;
        })
      } else {
        setPlaceholder((p) => {
          const updated = currentword.substring(0, p.length - 1);
          if (updated === '') {
            setIsDeleting(false);
            setIndex((i) => (i + 1) % word.length);
          }
          return updated;
        });
      }
    };
    const timer = setTimeout(handling, typeSpeed);
    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, index, word]);

  const searchRef = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="white" expand="lg" className="border-bottom navbar-tall py-3">
        <Container fluid className="px-4">
          {/* ---------- LOGO ---------- */}
          <Navbar.Brand
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="Urban Company" className="navbar-logo" />
          </Navbar.Brand>

          {/* ---------- TOGGLE (MOBILE) + ICONS ---------- */}
          <div className="d-flex align-items-center d-lg-none gap-2">
            {/* Cart + Account icons */}
            <div
              className="icon-outline"
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            >
              <LuShoppingCart size={20} className="text-dark" />
            </div>
            <div
              onClick={() => setShowLogin(true)}
              style={{ cursor: "pointer" }}
            >
              <RiAccountCircleLine size={22} className="ms-1 text-dark" />
            </div>

            {/* Mobile toggle */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          {/* ---------- LINKS ---------- */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-3 gap-4">
              <NavLink
                to="/beauty"
                className={({ isActive }) =>
                  `text-secondary nav-link-small ${isActive ? "active-link" : ""
                  }`
                }
              >
                Beauty
              </NavLink>

              <NavLink
                to="/revamp"
                className={({ isActive }) =>
                  `text-secondary nav-link-small ${isActive ? "active-link" : ""
                  }`
                }
              >
                Revamp
              </NavLink>

              <NavLink
                to="/native"
                className={({ isActive }) =>
                  `text-secondary nav-link-small ${isActive ? "active-link" : ""
                  }`
                }
              >
                Native
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          {/* ---------- SEARCH + LOCATION + ICONS ---------- */}
          <Form className="search-section d-flex align-items-center gap-2 me-4">
            {/* LOCATION */}
            <div
              className="d-flex align-items-center px-2 py-2 border border-secondary-subtle rounded cursor-pointer location-box"
              onClick={() => setShowLocation(true)}
            >
              <SlLocationPin size={22} />
              <FormControl
                type="text"
                placeholder="Connaught Place, New..."
                className="border-0 bg-transparent shadow-none"
                readOnly
              />
              <IoIosArrowDown className="ms-2 " />
            </div>

            {/* SEARCH BOX */}
            <div className="search-icons">
              <div
                ref={searchRef}
                className="text-secondary d-flex align-items-center search-box px-2 py-2 border border-secondary-subtle rounded"
                onClick={() => setShowSearch(true)}
                style={{ cursor: "pointer" }}
              >
                <FaSearch className="" />
                <FormControl
                  type="text"
                  placeholder={
                    `${isFocused ? 'search for service' : `search for '${placeholder}'`}`
                  }
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="border-0 bg-transparent shadow-none cursor-pointer"
                  readOnly
                />
              </div>
            </div>

            {/* CART + ACCOUNT ICONS */}
            <div
              className={`align-items-center ms-4 icon-wrapper ${window.innerWidth > 991 ? "d-flex" : ""
                }`}
            >
              <div
                className="icon-outline"
                onClick={() => navigate("/cart")}
                style={{ cursor: "pointer" }}
              >
                <LuShoppingCart size={20} className="text-dark" />
              </div>
              <div
                onClick={() => setShowLogin(true)}
                style={{ cursor: "pointer" }}
              >
                <RiAccountCircleLine size={22} className="ms-2 text-dark" />
              </div>
            </div>

          </Form>
        </Container>
      </Navbar>

      {/* ---------- POPUPS ---------- */}
      <LocationBox
        show={showLocation}
        handleClose={() => setShowLocation(false)}
      />
      <SearchDropdown
        target={searchRef.current}
        show={showSearch}
        handleClose={() => setShowSearch(false)}
        onServices={(name) => setPlaceholder(name)}
      />
      <LoginPopup show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
}

export default NavbarUC;
