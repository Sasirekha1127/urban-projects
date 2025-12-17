import React, { useState, useEffect, useRef } from "react";
import { HiArrowSmLeft, HiArrowSmRight} from "react-icons/hi";
import carosuelImg1 from "../assets/carouselimg-1.png";
import carosuelImg2 from "../assets/carouselimg-2.png";
import carosuelImg3 from "../assets/carouselimg-3.png";
import carosuelImg4 from "../assets/carouselimg-4.png";
import carosuelImg5 from "../assets/carouselimg-5.png";
import "../components/CarouselPage.css";

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
  const [transition, setTransition] = useState(true);

  const trackRef = useRef(null);
  const totalCards = cards.length;
  const gap = 20; // gap in px

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

  // calculate transform whenever index changes
  useEffect(() => {
    if (!trackRef.current) return;

    const containerWidth = trackRef.current.offsetWidth;
    const cardWidth = (containerWidth - (visibleCount - 1) * gap) / visibleCount;
    const move = (cardWidth + gap) * (currentIndex + visibleCount);

    trackRef.current.style.transform = `translateX(-${move}px)`;
    trackRef.current.style.transition = transition ? "transform 0.5s ease" : "none";
  }, [currentIndex, visibleCount, transition]);

  // clone slides at start and end for infinite scroll
  const slides = [
    ...cards.slice(-visibleCount),
    ...cards,
    ...cards.slice(0, visibleCount),
  ];

  const handleTransitionEnd = () => {
    if (currentIndex >= totalCards) {
      setTransition(false);
      setCurrentIndex(currentIndex - totalCards);
    } else if (currentIndex < 0) {
      setTransition(false);
      setCurrentIndex(currentIndex + totalCards);
    } else {
      setTransition(true);
    }
  };

  const scrollRight = () => setTransition(true) || setCurrentIndex((prev) => prev + 1);
  const scrollLeft = () => setTransition(true) || setCurrentIndex((prev) => prev - 1);

  return (
    <>
      <div className="offer">Offers & Discounts</div>
      <div className="carousel-container">
        <button className="arrow arrow-left" onClick={scrollLeft}>
<HiArrowSmLeft />
        </button>

        <button className="arrow arrow-right" onClick={scrollRight}>
<HiArrowSmRight />
        </button>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((card, index) => (
              <div
                key={index}
                className="carousel-card"
                style={{ flex: `0 0 calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`, marginRight: index !== slides.length - 1 ? `${gap}px` : 0 }}
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
