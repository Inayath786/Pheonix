import React, { useState, useRef, useEffect } from "react";
import useResponsive from "./useResponsive";

export default function Programs() {
  const { isMobile } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const sectionStyle = {
    padding: "80px 8%",
    background: "linear-gradient(135deg, #000, #111)",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  const cardStyle = {
    background: "linear-gradient(145deg, #1a1a1a, #222)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "15px",
    padding: "30px 20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    boxSizing: "border-box",
    minWidth: "250px",
    flexShrink: 0,
  };

  const iconStyle = {
    fontSize: "2.5rem",
    marginBottom: "15px",
    color: "#e63946",
  };

  const btnStyle = {
    background: "#ff4500",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    margin: "0 5px",
    transition: "all 0.3s ease",
  };

  const programs = [
    { name: "Strength Training", desc: "Build muscle, gain endurance, and push your limits with personalized strength routines.", icon: "💪" },
    { name: "Cardio Burn", desc: "Enhance your stamina, heart health, and energy with high-intensity cardio sessions.", icon: "🏃‍♂️" },
    { name: "Yoga & Flexibility", desc: "Relax, stretch, and improve your posture and flexibility through calming yoga.", icon: "🧘‍♀️" },
    { name: "HIIT Power", desc: "Short, intense workouts designed to torch fat and boost metabolism.", icon: "🔥" },
    { name: "CrossFit Challenge", desc: "Dynamic workouts combining weightlifting, cardio, and functional movements.", icon: "🏋️‍♀️" },
    { name: "Zumba & Dance Fitness", desc: "Fun-filled dance sessions that burn calories and keep you moving with rhythm.", icon: "🎶" },
  ];

  // Move carousel
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  useEffect(() => {
    if (isMobile && containerRef.current) {
      const cardWidth = containerRef.current.firstChild.getBoundingClientRect().width + 15; // include gap
      containerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex, isMobile]);

  return (
    <section id="programs" style={sectionStyle}>
      <h2 style={{ fontSize: "2.4rem", letterSpacing: "1px" }}>Our Programs</h2>
      <p style={{ color: "#bbb", marginTop: "10px", maxWidth: "700px", margin: "10px auto" }}>
        Explore fitness programs tailored for every goal — from building strength to finding balance.
      </p>

      {/* Desktop Grid */}
      {!isMobile && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px", marginTop: "50px" }}>
          {programs.map((p, i) => (
            <div key={i} style={cardStyle}>
              <div style={iconStyle}>{p.icon}</div>
              <h3 style={{ color: "#e63946", marginBottom: "10px" }}>{p.name}</h3>
              <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Carousel */}
      {isMobile && (
        <div style={{ position: "relative", marginTop: "30px" }}>
          <div
            ref={containerRef}
            style={{
              display: "flex",
              transition: "transform 0.4s ease",
              gap: "15px",
              padding: "0 10px",
            }}
          >
            {programs.map((p, i) => (
              <div key={i} style={cardStyle}>
                <div style={iconStyle}>{p.icon}</div>
                <h3 style={{ color: "#e63946", marginBottom: "10px" }}>{p.name}</h3>
                <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <button style={btnStyle} onClick={prevSlide}>
              ◀
            </button>
            <button style={btnStyle} onClick={nextSlide}>
              ▶
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
