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

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  const word = ["Facial", "Kitchen cleaning", "AC cleaning"];
  const [placeholder, setPlaceholder] = useState("service");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typeSpeed = 90;
    const currentword = word[index];

    const handleTyping = () => {
      if (!isDeleting) {
        setPlaceholder((p) => {
          const updated = currentword.substring(0, p.length + 1);
          if (updated === currentword) setTimeout(() => setIsDeleting(true), 1000);
          return updated;
        });
      } else {
        setPlaceholder((p) => {
          const updated = currentword.substring(0, p.length - 1);
          if (updated === "") {
            setIsDeleting(false);
            setIndex((i) => (i + 1) % word.length);
          }
          return updated;
        });
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, index, word]);

  const searchRef = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      {showLoader ? (
        <Loading />
      ) : (
        <>
          <Navbar bg="white" expand="lg" fixed="top" className="border-bottom navbar-tall py-3">
            <Container fluid className="px-4">
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

                      {cartCount > 0 && (
                        <span className="uc-cart-badge">{cartCount}</span>
                      )}
                    </div>


                    <div onClick={() => setShowLogin(true)} style={{ cursor: "pointer" }}>
                      <RiAccountCircleLine size={22} className="ms-1 text-dark" />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  </>
                )}
              </div>

              <Navbar.Collapse id="basic-navbar-nav">
                {!hideLink && (
                  <Nav className="me-auto mx-3 gap-4">
                    <NavLink to="/beauty" className={({ isActive }) => `text-secondary nav-link-small ${isActive ? "active-link" : ""}`}>Beauty</NavLink>
                    <NavLink to="/revamp" className={({ isActive }) => `text-secondary nav-link-small ${isActive ? "active-link" : ""}`}>Revamp</NavLink>
                    <NavLink to="/native" className={({ isActive }) => `text-secondary nav-link-small ${isActive ? "active-link" : ""}`}>Native</NavLink>
                  </Nav>
                )}
              </Navbar.Collapse>

              {/* Search + Location */}
              {(!hideSearch || !hideLocation) && (
                <div className="search-wrapper w-100">
                  <Form className="mt-2 search-section d-flex gap-2">
                    {!hideLocation && (
                      <div className="d-flex align-items-center px-2 ms-auto py-2 border border-secondary-subtle rounded cursor-pointer location-box"
                        onClick={() => setShowLocation(true)}>
                        <SlLocationPin size={22} />
                        <FormControl type="text" placeholder="Connaught Place, New..." className="border-0 bg-transparent shadow-none" readOnly />
                        <IoIosArrowDown className="ms-2" />
                      </div>
                    )}

                    {!hideSearch && (
                      <div className="search-icons d-flex ">
                        <div ref={searchRef} className="text-secondary d-flex align-items-center search-box border border-secondary-subtle rounded"
                          onClick={() => setShowSearch(true)} style={{ cursor: "pointer" }}>
                          <FaSearch />
                          <FormControl type="text" placeholder={`Search for '${placeholder}'`} className="border-0 bg-transparent shadow-none cursor-pointer" readOnly />
                        </div>
                      </div>
                    )}

                    {/* Desktop icons */}
                    {!hideIcons && (
                      <div className="d-none d-lg-flex align-items-center ms-auto icon-wrapper">
                        <div
                          className="uc-cart-wrapper "
                          onClick={() => navigate("/cart")}
                          style={{ cursor: "pointer", marginLeft: "15px" }}
                        >
                          <LuShoppingCart size={22} className="text-dark" />

                          {cartCount > 0 && (
                            <span className="uc-cart-badge">{cartCount}</span>
                          )}
                        </div>


                        <div onClick={() => setShowLogin(true)} style={{ cursor: "pointer" }}>
                          <RiAccountCircleLine size={22} className="ms-2 text-dark" />
                        </div>
                      </div>
                    )}
                  </Form>
                </div>
              )}
            </Container>
          </Navbar>

          <LocationBox show={showLocation} handleClose={() => setShowLocation(false)} />
          <SearchDropdown target={searchRef.current} show={showSearch} handleClose={() => setShowSearch(false)} onServices={(name) => setPlaceholder(name)} />
          <LoginPopup show={showLogin} handleClose={() => setShowLogin(false)} />
        </>
        
      )}
    </>
  );
}

export default NavbarUC;
