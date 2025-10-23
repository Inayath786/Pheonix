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

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % members.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);

  // ===== Styles =====
  const sectionStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "60px 5%" : "100px 10%",
    background: "#111",
    color: "#fff",
    gap: isMobile ? "30px" : "60px",
    textAlign: "center",
    overflowX: "hidden", // prevent horizontal scroll
  };

  const imagesContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: isMobile ? "wrap" : "nowrap",
    gap: isMobile ? "15px" : "20px",
    width: isMobile ? "100%" : "auto",
  };

  const imageStyle = {
    width: isMobile ? "48%" : "320px",
    maxWidth: "100%",
    height: isMobile ? "auto" : "320px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
    transition: "transform 0.3s ease",
  };

  const textContainer = {
    maxWidth: isMobile ? "100%" : "500px",
    textAlign: isMobile ? "center" : "left",
  };

  const btnContainer = {
    marginTop: "20px",
    display: "flex",
    justifyContent: isMobile ? "center" : "flex-start",
    gap: "20px",
    flexWrap: "wrap",
  };

  const btnStyle = {
    background: "#ff4500",
    border: "none",
    padding: "10px 20px",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.3s ease, transform 0.2s ease",
    whiteSpace: "nowrap",
  };

  const handleHover = (e, scale) => {
    e.target.style.transform = `scale(${scale})`;
  };

  return (
    <section id="transformations" style={sectionStyle}>
      {/* Images */}
      <div style={imagesContainer}>
        <img
          src={members[currentIndex].before}
          alt={`${members[currentIndex].name} before`}
          style={imageStyle}
          onMouseEnter={(e) => handleHover(e, 1.05)}
          onMouseLeave={(e) => handleHover(e, 1)}
        />
        <img
          src={members[currentIndex].after}
          alt={`${members[currentIndex].name} after`}
          style={imageStyle}
          onMouseEnter={(e) => handleHover(e, 1.05)}
          onMouseLeave={(e) => handleHover(e, 1)}
        />
      </div>

      {/* Text + Buttons */}
      <div style={textContainer}>
        <h2 style={{ marginBottom: "15px", color: "#ff4500" }}>Our Fitness Journey</h2>
        <p style={{ fontSize: isMobile ? "15px" : "17px", lineHeight: "1.7" }}>
          At <b>Phoenix Fitness</b>, we empower people to transform their lives. From struggling with fitness to achieving their dream bodies, our members have seen incredible results with our expert trainers, personalized programs, and supportive community.
        </p>

        <div style={btnContainer}>
          <button
            style={btnStyle}
            onClick={prevSlide}
            onMouseEnter={(e) => (e.target.style.background = "#e13c00")}
            onMouseLeave={(e) => (e.target.style.background = "#ff4500")}
          >
            ◀ Previous
          </button>
          <button
            style={btnStyle}
            onClick={nextSlide}
            onMouseEnter={(e) => (e.target.style.background = "#e13c00")}
            onMouseLeave={(e) => (e.target.style.background = "#ff4500")}
          >
            Next ▶
          </button>
        </div>
      </div>
    </section>
  );
}
