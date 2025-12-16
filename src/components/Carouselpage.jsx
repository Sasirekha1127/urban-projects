import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import carosuelImg1 from "../assets/carouselimg-1.png";
import carosuelImg2 from "../assets/carouselimg-2.png";
import carosuelImg3 from "../assets/carouselimg-3.png";
import carosuelImg4 from "../assets/carouselimg-4.png";
import carosuelImg5 from "../assets/carouselimg-5.png";
import "../components/CarouselPage.css"; // we will add CSS here

export default function CustomCarousel() {
  const cards = [
    { image: carosuelImg1 },
    { image: carosuelImg2 },
    { image: carosuelImg3 },
    { image: carosuelImg4 },
    { image: carosuelImg5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = cards.length;

  const scrollLeft = () => setCurrentIndex(Math.max(currentIndex - 1, 0));
  const scrollRight = () =>
    setCurrentIndex(Math.min(currentIndex + 1, totalCards - visibleCount));

  return (
    <>
    <div className="offer">Offers & discounts</div>
    <div className="carousel-container">
      {currentIndex > 0 && (
        <button className="arrow arrow-left" onClick={scrollLeft}>
          <IoIosArrowBack />
        </button>
      )}

      {currentIndex < totalCards - visibleCount && (
        <button className="arrow arrow-right" onClick={scrollRight}>
          <IoIosArrowForward />
        </button>
      )}

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="carousel-card"
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <img src={card.image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
