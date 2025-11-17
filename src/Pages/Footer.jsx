import React from "react";
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn,} from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/logo.png"
import appstore from "../assets/footer1.png"
import googleplay from "../assets/footer2.png"





export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* ---- Top Section ---- */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" className="footer-logo-img" />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Investor Relations</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Anti-discrimination Policy</li>
              <li>ESG Impact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>For customers</h3>
            <ul>
              <li>UC reviews</li>
              <li>Categories near you</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>For professionals</h3>
            <ul>
              <li>Register as a professional</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Social links</h3>
            <div className="footer-social">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
            <div className="footer-apps">
              <img
                src={appstore}
                alt="App Store"
              />
              <img
                src={googleplay}
                alt="Google Play"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---- Bottom Section ---- */}
      <div className="footer-bottom">
        <p>
          * As on December 31, 2024<br /> </p>
          <h6>© 2025 Urban Company Limited (formerly known as UrbanClap Technologies
          India Limited). All rights reserved. | CIN: L74140DL2014PLC274413</h6>
       
      </div>
    </footer>
  );
}
