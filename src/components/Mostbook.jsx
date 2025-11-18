import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/Mostbook.css";

import most1 from "../assets/most1.png";
import most2 from "../assets/most2.png";
import most3 from "../assets/most3.png";
import most4 from "../assets/most4.png";
import most5 from "../assets/most5.png";
import most6 from "../assets/most6.png";

const MostBooked = () => {
  const mostBooked = [
    { img: most1, text: "Intense bathroom cleaning", rating: 4.9, reviews: "3.5M", price: "₹449" },
    { img: most2, text: "Intense cleaning (2 bathrooms)", rating: 4.49, reviews: "3.5M", price: "₹1200" },
    { img: most3, text: "Haircut for men", rating: 4.7, reviews: "471k", price: "₹299" },
    { img: most4, text: "Chimney cleaning", rating: 4.6, reviews: "1.8M", price: "₹399" },
    { img: most5, text: "Intense cleaning (3 bathrooms)", rating: 4.3, reviews: "333k", price: "₹1200" },
    { img: most6, text: "Roll-on waxing (full arms, legs & underarms)", rating: 4.4, reviews: "155k", price: "₹899" },
  ];

  const NextArrow = ({ onClick }) => (
    <div className="mostbooked-arrow right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="mostbooked-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1, // scroll one item per click
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mostbooked-wrapper">
      <h2 className="mostbooked-heading">Most Booked Services</h2>

      <Slider {...settings} className="mostbooked-carousel">
        {mostBooked.map((item, index) => (
          <div key={index} className="mostbooked-item">
            <img src={item.img} alt={item.text} className="mostbooked-image"/>
            <p className="mostbooked-text">{item.text}</p>
            <p className="mostbooked-rating">{item.rating} ({item.reviews})</p>
            <p className="mostbooked-price">{item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostBooked;
