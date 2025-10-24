import React, { useState } from "react";

function Gallery() {
  const [index, setIndex] = useState(0);
 const images = [
  { src: "/place1.jpg", alt: "Best gym for weight loss in Hyderabad" },
  { src: "/place2.jpg", alt: "Personalized training programs at Phoenix Fitness" },
  { src: "/place3.jpg", alt: "Gym for muscle building and strength training" },
  { src: "/place4.jpg", alt: "Wellness and fitness coaching near me" },
  { src: "/place5.jpg", alt: "Group fitness classes and personal training" },
];

  const sectionStyle = {
    padding: "60px 10%",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
  };

  const carouselContainer = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    borderRadius: "10px",
  };

  const slideTrack = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${index * 100}%)`,
  };

  const imgStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  };

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    padding: "10px 15px",
  };

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          img {
            height: 250px !important;
          }
        }
        `}
      </style>

      <section id="gallery" style={sectionStyle}>
        <h2>Our Gym Gallery</h2>
        <div style={carouselContainer}>
          <div style={slideTrack}>
            {images.map((src, i) => (
              <img key={i} src={src} alt={`gym-${i}`} style={imgStyle} />
            ))}
          </div>
          <button style={{ ...buttonStyle, left: "10px" }} onClick={prev}>
            ❮
          </button>
          <button style={{ ...buttonStyle, right: "10px" }} onClick={next}>
            ❯
          </button>
        </div>
      </section>
    </>
  );
}

export default Gallery;
