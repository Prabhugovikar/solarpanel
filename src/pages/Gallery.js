import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    { src: "image1.jpg", title: "Solar Panel 1", description: "High-efficiency solar panel." },
    { src: "image2.jpg", title: "Solar Panel 2", description: "Eco-friendly solar solution." },
    { src: "image3.jpg", title: "Solar Panel 3", description: "Durable and long-lasting." },
    { src: "image4.jpg", title: "Solar Panel 4", description: "Affordable solar panels." },
    { src: "image5.jpg", title: "Solar Panel 5", description: "Premium quality solar panel." },
    { src: "image1.jpg", title: "Solar Panel 1", description: "High-efficiency solar panel." },
    { src: "image2.jpg", title: "Solar Panel 2", description: "Eco-friendly solar solution." },
    { src: "image3.jpg", title: "Solar Panel 3", description: "Durable and long-lasting." },
    { src: "image4.jpg", title: "Solar Panel 4", description: "Affordable solar panels." },
    { src: "image5.jpg", title: "Solar Panel 5", description: "Premium quality solar panel." },
    { src: "image1.jpg", title: "Solar Panel 1", description: "High-efficiency solar panel." },
    { src: "image2.jpg", title: "Solar Panel 2", description: "Eco-friendly solar solution." },
    { src: "image3.jpg", title: "Solar Panel 3", description: "Durable and long-lasting." },
    { src: "image4.jpg", title: "Solar Panel 4", description: "Affordable solar panels." },
    { src: "image5.jpg", title: "Solar Panel 5", description: "Premium quality solar panel." },
    { src: "image1.jpg", title: "Solar Panel 1", description: "High-efficiency solar panel." },
    { src: "image2.jpg", title: "Solar Panel 2", description: "Eco-friendly solar solution." },
    { src: "image3.jpg", title: "Solar Panel 3", description: "Durable and long-lasting." },
    { src: "image4.jpg", title: "Solar Panel 4", description: "Affordable solar panels." },
    { src: "image5.jpg", title: "Solar Panel 5", description: "Premium quality solar panel." },
    { src: "image1.jpg", title: "Solar Panel 1", description: "High-efficiency solar panel." },
    { src: "image2.jpg", title: "Solar Panel 2", description: "Eco-friendly solar solution." },
    { src: "image3.jpg", title: "Solar Panel 3", description: "Durable and long-lasting." },
    { src: "image4.jpg", title: "Solar Panel 4", description: "Affordable solar panels." },
    { src: "image5.jpg", title: "Solar Panel 5", description: "Premium quality solar panel." },
  ];

  return (
    <div className="gallery">
      <h1>Projects</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.title} />
            <div className="gallery-info">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
