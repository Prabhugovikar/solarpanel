import React, { useRef } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  // Function to scroll the carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to scroll the carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="carousel">
      
      <div className="carousel-container" ref={carouselRef}>
        {items.map((item, index) => (
          <div key={index} className="carousel-card">
            <img src={item.imagePath} alt={`solution-${index}`} />
            <div className="carousel-card-description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={scrollLeft} className="arrow-button left">
          &#8592;
        </button>
        <button onClick={scrollRight} className="arrow-button right">
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
