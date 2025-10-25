import React, { useState } from "react";
import useResponsive from "./useResponsive";

const trainers = [
  {
    name: "Alex Johnson",
    role: "Strength Coach",
    bio: "Expert in weightlifting and muscle building with 10+ years of experience.",
    image: "/trainer1.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Yoga Instructor",
    bio: "Passionate about flexibility and mindfulness, guiding clients to a balanced life.",
    image: "/trainer2.jpg",
  },
  {
    name: "Mike Thompson",
    role: "HIIT Trainer",
    bio: "Specializes in high-intensity interval training to burn fat fast.",
    image: "/trainer3.jpg",
  },
  {
    name: "Mike Thompson",
    role: "HIIT Trainer",
    bio: "Specializes in high-intensity interval training to burn fat fast.",
    image: "/trainer4.jpg",
  },
  {
    name: "Mike Thompson",
    role: "HIIT Trainer",
    bio: "Specializes in high-intensity interval training to burn fat fast.",
    image: "/trainer5.jpg",
  },
];

export default function TrainerCarousel() {
  const { isMobile } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTrainer = () => setCurrentIndex((prev) => (prev + 1) % trainers.length);
  const prevTrainer = () =>
    setCurrentIndex((prev) => (prev - 1 + trainers.length) % trainers.length);

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: isMobile ? "60px 5%" : "100px 10%",
    background: "#111",
    color: "#fff",
    textAlign: "center",
    gap: "30px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    background: "linear-gradient(145deg, #1a1a1a, #222)",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    maxWidth: "800px",
    width: "100%",
    gap: "20px",
    transition: "transform 0.5s ease",
  };

  const imageStyle = {
    width: isMobile ? "100%" : "250px",
    height: isMobile ? "auto" : "250px",
    borderRadius: "15px",
    objectFit: "cover",
  };

  const btnStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ff4500",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 25px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Meet Our Trainer</h2>

      <div style={cardStyle}>
        <img
          src={trainers[currentIndex].image}
          alt={trainers[currentIndex].name}
          style={imageStyle}
        />

        <div style={{ textAlign: isMobile ? "center" : "left", flex: 1 }}>
          <h3 style={{ fontSize: "1.8rem", color: "#e63946" }}>{trainers[currentIndex].name}</h3>
          <p style={{ fontWeight: "500", color: "#ffb703" }}>{trainers[currentIndex].role}</p>
          <p style={{ color: "#ccc", marginTop: "10px" }}>{trainers[currentIndex].bio}</p>

          <div style={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start", gap: "15px", marginTop: "20px" }}>
            <button
              style={btnStyle}
              onClick={prevTrainer}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ◀ Previous
            </button>
            <button
              style={btnStyle}
              onClick={nextTrainer}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
