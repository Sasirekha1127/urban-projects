import React, { useEffect, useState } from "react";
import "../Pages/Revamp.css";
import Footer from "../Pages/Footer.jsx";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

// section images
import revamp1 from "../assets/revamp1.png";
import revamp2 from "../assets/revamp2.png";
import revamp3 from "../assets/revamp3.png";
import revamp4 from "../assets/revamp4.png";
import revamp5 from "../assets/revamp5.png";

// carousel images
import revampcaro1 from "../assets/revampcaro1.png";
import revampcaro2 from "../assets/revampcaro2.png";
import revampcaro3 from "../assets/revampcaro3.png";
import revampcaro4 from "../assets/revampcaro4.png";

export default function Revamp({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const images1 = [revamp1, revamp2, revamp3, revamp4, revamp5];
  const images2 = [revampcaro1, revampcaro2, revampcaro3, revampcaro4];

  // loader + navbar hide
  useEffect(() => {
    setHideNavbar(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [setHideNavbar]);

  // responsive visible count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 600) setVisibleCount(1);
      else if (window.innerWidth <= 992) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const next = (setter, length) =>
    setter((prev) => (prev + 1) % length);

  const prev = (setter, length) =>
    setter((prev) => (prev - 1 + length) % length);

  const getVisibleImages = (images, index) =>
    Array.from({ length: visibleCount }).map(
      (_, i) => images[(index + i) % images.length]
    );

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="dot-spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <div className="revamp-page">
      {/* -------- Carousel 1 -------- */}
      <h2 className="revamp-carousel-title">Explore by space</h2>

      <div className="revamp-carousel">
        <button
          className="arrowss left"
          onClick={() => prev(setIndex1, images1.length)}
        >
          <HiArrowSmLeft />
        </button>

        <div className="revamp-track">
          {getVisibleImages(images1, index1).map((img, i) => (
            <img key={i} src={img} alt="revamp" />
          ))}
        </div>

        <button
          className="arrowss right"
          onClick={() => next(setIndex1, images1.length)}
        >
          <HiArrowSmRight />
        </button>
      </div>

      {/* -------- Carousel 2 -------- */}
      <h2 className="revamp-carousel-title">
        Beautiful walls for all your needs
      </h2>

      <div className="revamp-carousel">
        <button
          className="arrowss left"
          onClick={() => prev(setIndex2, images2.length)}
        >
          <HiArrowSmLeft />
        </button>

        <div className="revamp-track">
          {getVisibleImages(images2, index2).map((img, i) => (
            <img key={i} src={img} alt="revamp" />
          ))}
        </div>

        <button
          className="arrowss right"
          onClick={() => next(setIndex2, images2.length)}
        >
          <HiArrowSmRight />
        </button>
      </div>

      <Footer />
    </div>
  );
}
