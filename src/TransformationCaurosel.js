import React, { useState } from "react";
import useResponsive from "./useResponsive";

export default function TransformationCarousel() {
  const { isMobile } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);

  const members = [
    { before: "/transa1.jpg", after: "/transa2.jpg", name: "Hema" },
    { before: "/transb1.jpg", after: "transb2.jpg", name: "Sudheer" },
    { before: "/transc1.jpg", after: "/transc2.jpg", name: "Mahesh" },
     { before: "/transd1.jpg", after: "/transd2.jpg", name: "Prakash" },
       { before: "/transe1.jpg", after: "/transe2.jpg", name: "Abhi" },
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
