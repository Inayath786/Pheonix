import React, { useState } from "react";
import useResponsive from "./useResponsive";

export default function TransformationCarousel() {
  const { isMobile } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);

  const members = [
    { before: "https://images.unsplash.com/photo-1579758629930-0360a3b17fae", after: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642", name: "John" },
    { before: "https://images.unsplash.com/photo-1594737625785-30c64d1e2d63", after: "https://images.unsplash.com/photo-1611965938960-d1fbe0287a49", name: "Sarah" },
    { before: "https://images.unsplash.com/photo-1599058917213-1964085e16b6", after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", name: "Mike" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % members.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);

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
    overflowX: "hidden",
  };

  const imageStyle = {
    width: isMobile ? "48%" : "320px",
    maxWidth: "100%",
    height: isMobile ? "auto" : "320px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease",
  };

  const btnStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ff4500",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 18px",
    minWidth: "100px",
    fontWeight: "600",
    cursor: "pointer",
    textAlign: "center",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  return (
    <section style={sectionStyle}>
      <img src={members[currentIndex].before} style={imageStyle} alt="Before" />
      <img src={members[currentIndex].after} style={imageStyle} alt="After" />

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: isMobile ? "20px" : "0" }}>
        <button style={btnStyle} onClick={prevSlide} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} >
          ◀ Previous
        </button>
        <button style={btnStyle} onClick={nextSlide} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} >
          Next ▶
        </button>
      </div>
    </section>
  );
}
