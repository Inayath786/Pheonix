import React, { useState } from "react";
import useResponsive from "./useResponsive";

export default function TransformationCarousel() {
  const { isMobile } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);

  const members = [
    {
      before: "https://images.unsplash.com/photo-1579758629930-0360a3b17fae?auto=format&fit=crop&w=400&q=80",
      after: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
      name: "John",
    },
    {
      before: "https://images.unsplash.com/photo-1594737625785-30c64d1e2d63?auto=format&fit=crop&w=400&q=80",
      after: "https://images.unsplash.com/photo-1611965938960-d1fbe0287a49?auto=format&fit=crop&w=400&q=80",
      name: "Sarah",
    },
    {
      before: "https://images.unsplash.com/photo-1599058917213-1964085e16b6?auto=format&fit=crop&w=400&q=80",
      after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      name: "Mike",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 10%",
    background: "#111",
    color: "#fff",
    gap: "40px",
  };

  const imagesContainer = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const imageStyle = {
    width: isMobile ? "250px" : "350px",
    height: isMobile ? "250px" : "350px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
  };

  const btnStyle = {
    background: "#ff4500",
    border: "none",
    padding: "10px 20px",
    margin: "10px",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
  };

  const textStyle = {
    maxWidth: "500px",
    textAlign: isMobile ? "center" : "left",
    fontSize: isMobile ? "16px" : "18px",
    lineHeight: "1.6",
  };

  return (
    <section id="transformations" style={sectionStyle}>
      {/* Images */}
      <div style={imagesContainer}>
        <img
          src={members[currentIndex].before}
          alt={`${members[currentIndex].name} before`}
          style={imageStyle}
        />
        <img
          src={members[currentIndex].after}
          alt={`${members[currentIndex].name} after`}
          style={imageStyle}
        />
      </div>

      {/* Text */}
      <div style={textStyle}>
        <h2 style={{ marginBottom: "20px" }}>Our Fitness Journey</h2>
        <p>
          At Phoenix Fitness, we empower people to transform their lives. From
          struggling with fitness to achieving their dream bodies, our members
          have seen incredible results with our expert trainers, personalized
          programs, and supportive community. Join us and start your journey
          today!
        </p>

        {/* Carousel Buttons */}
        <div style={{ marginTop: "20px" }}>
          <button style={btnStyle} onClick={prevSlide}>
            ◀ Previous
          </button>
          <button style={btnStyle} onClick={nextSlide}>
            Next ▶
          </button>
        </div>
      </div>
    </section>
  );
}
