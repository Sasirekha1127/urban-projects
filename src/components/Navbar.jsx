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
import Loading from "../components/Loading.jsx";

import logo from "../assets/logo.png";
import "./Navbar.css";

function NavbarUC({ hideSearch, hideLocation, hideIcons, hideLink, cart = [] }) {
  const [showLocation, setShowLocation] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [address, setAddress] = useState("");


  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  const word = ["Facial", "Kitchen cleaning", "AC cleaning"];
  const [placeholder, setPlaceholder] = useState("service");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Typing effect for search placeholder
 // 1️⃣ Address sync with localStorage + event listener
useEffect(() => {
  // On page load
  setAddress(localStorage.getItem("userAddress") || "");

  const updateAddress = () => {
    setAddress(localStorage.getItem("userAddress") || "");
  };

  window.addEventListener("addressUpdated", updateAddress);

  return () => {
    window.removeEventListener("addressUpdated", updateAddress);
  };
}, []);

// 2️⃣ Typing effect for search placeholder
useEffect(() => {
  const currentWord = word[index];
  const timer = setTimeout(() => {
    if (!isDeleting) {
      setPlaceholder((p) => {
        const updated = currentWord.substring(0, p.length + 1);
        if (updated === currentWord) setTimeout(() => setIsDeleting(true), 1000);
        return updated;
      });
    } else {
      setPlaceholder((p) => {
        const updated = currentWord.substring(0, p.length - 1);
        if (updated === "") {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % word.length);
        }
        return updated;
      });
    }
  }, 90);

    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, index, word]);

  const handleLocationClose = (addr) => {
    if (addr) {
      setAddress(addr);
      localStorage.setItem("userAddress", addr);
      window.dispatchEvent(new Event("addressUpdated"));

    }
    setShowLocation(false);
  };

  


  return (
    <>
      {showLoader ? (
        <Loading />
      ) : (
        <>
          <Navbar bg="white" expand="lg" fixed="top" className="border-bottom navbar-tall py-3">
            <Container fluid className="px-4">
              {/* Logo */}
              <Navbar.Brand
                onClick={() => {
                  setShowLoader(true);
                  setTimeout(() => {
                    setShowLoader(false);
                    navigate("/");
                    window.scrollTo(0, 0);
                  }, 2000);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={logo} alt="Urban Company" className="navbar-logo" />
              </Navbar.Brand>

              {/* Mobile icons */}
              <div className="d-flex align-items-center d-lg-none gap-2">
                {!hideIcons && (
                  <>
                    <div
                      className="uc-cart-wrapper"
                      onClick={() => navigate("/cart")}
                      style={{ cursor: "pointer" }}
                    >
                      <LuShoppingCart size={22} className="text-dark" />
                      {cartCount > 0 && <span className="uc-cart-badge">{cartCount}</span>}
                    </div>

                    <div
                      onClick={() => setShowLogin((prev) => !prev)}
                      style={{ cursor: "pointer" }}
                    >
                      <RiAccountCircleLine size={22} className="ms-1 text-dark" />
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  </>
                )}
              </div>

              {/* Desktop Navbar Links */}
              <Navbar.Collapse id="basic-navbar-nav">
                {!hideLink && (
                  <Nav className="me-auto mx-3 gap-4">
                    <NavLink
                      to="/beauty"
                      className={({ isActive }) =>
                        `text-secondary nav-link-small ${isActive ? "active-link" : ""}`
                      }
                    >
                      Beauty
                    </NavLink>
                    <NavLink
                      to="/revamp"
                      className={({ isActive }) =>
                        `text-secondary nav-link-small ${isActive ? "active-link" : ""}`
                      }
                    >
                      Revamp
                    </NavLink>
                    <NavLink
                      to="/native"
                      className={({ isActive }) =>
                        `text-secondary nav-link-small ${isActive ? "active-link" : ""}`
                      }
                    >
                      Native
                    </NavLink>
                  </Nav>
                )}
              </Navbar.Collapse>

              {/* Search + Location */}
              {(!hideSearch || !hideLocation) && (
                <div className="search-wrapper w-100">
                  <Form className="mt-2 search-section d-flex gap-2">
                    {/* Location */}
                    {!hideLocation && (
                      <div
                        className="d-flex align-items-center px-2 ms-auto py-2 border border-secondary-subtle rounded cursor-pointer location-box"
                        onClick={() => setShowLocation(true)}
                      >
                        <SlLocationPin size={22} />
                        <FormControl
                          type="text"
                          value={address || ""}
                          placeholder="Add address"
                          className="border-0 bg-transparent shadow-none"
                          readOnly
                        />

                        <IoIosArrowDown className="ms-2" />
                      </div>
                    )}

                    {/* Search */}
                    {!hideSearch && (
                      <div className="search-icons d-flex">
                        <div
                          ref={searchRef}
                          className="text-secondary d-flex align-items-center search-box border border-secondary-subtle rounded"
                          onClick={() => setShowSearch(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <FaSearch />
                          <FormControl
                            type="text"
                            placeholder={`Search for '${placeholder}'`}
                            className="border-0 bg-transparent shadow-none cursor-pointer"
                            readOnly
                          />
                        </div>
                      </div>
                    )}

                    {/* Desktop icons */}
                    {!hideIcons && (
                      <div className="d-none d-lg-flex align-items-center ms-auto icon-wrapper">
                        <div
                          className="uc-cart-wrapper"
                          onClick={() => navigate("/cart")}
                          style={{ cursor: "pointer", marginLeft: "15px" }}
                        >
                          <LuShoppingCart size={22} className="text-dark" />
                          {cartCount > 0 && <span className="uc-cart-badge">{cartCount}</span>}
                        </div>

                        <div
                          onClick={() => setShowLogin((prev) => !prev)}
                          style={{ cursor: "pointer" }}
                        >
                          <RiAccountCircleLine size={22} className="ms-2 text-dark" />
                        </div>
                      </div>
                    )}
                  </Form>
                </div>
              )}
            </Container>
          </Navbar>

          {/* Dropdowns / Modals */}
          <LocationBox
            show={showLocation}
            address={address}
            onClose={handleLocationClose}
          />
          <SearchDropdown
            target={searchRef.current}
            show={showSearch}
            handleClose={() => setShowSearch(false)}
            onServices={(name) => setPlaceholder(name)}
          />
          <LoginPopup show={showLogin} onClose={() => setShowLogin(false)} />
        </>
      )}
    </>
  );
}

export default NavbarUC;
