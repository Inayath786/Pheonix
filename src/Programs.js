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
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    minWidth: "250px",
    flexShrink: 0,
    transition: "transform 0.3s ease",
  };

  const iconStyle = { fontSize: "2.5rem", marginBottom: "15px", color: "#e63946" };

  const btnStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ff4500",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 18px",
    minWidth: "50px",
    fontWeight: "600",
    cursor: "pointer",
    textAlign: "center",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  const programs = [
    { name: "Strength Training", desc: "Build muscle, gain endurance.", icon: "💪" },
    { name: "Cardio Burn", desc: "High-intensity cardio sessions.", icon: "🏃‍♂️" },
    { name: "Yoga & Flexibility", desc: "Improve posture and flexibility.", icon: "🧘‍♀️" },
    { name: "CrossFit Challenge", desc: "Weightlifting & functional workouts.", icon: "🏋️‍♀️" },
    { name: "FatLoss", desc: "Transforming from fat to fit", icon: "💪" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % programs.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);

  useEffect(() => {
    if (isMobile && containerRef.current) {
      const cardWidth = containerRef.current.firstChild.getBoundingClientRect().width + 15;
      containerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex, isMobile]);

  return (
    <section style={sectionStyle}>
      <h2 style={{ fontSize: "2.4rem", letterSpacing: "1px" }}>Our Programs</h2>
      <p style={{ color: "#bbb", maxWidth: "700px", margin: "10px auto" }}>
        Explore fitness programs tailored for every goal.
      </p>

      {/* Desktop Grid */}
      {!isMobile && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px", marginTop: "50px" }}>
          {programs.map((p, i) => (
            <div key={i} style={cardStyle}>
              <div style={iconStyle}>{p.icon}</div>
              <h3 style={{ color: "#e63946" }}>{p.name}</h3>
              <p style={{ color: "#ccc" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Carousel */}
      {isMobile && (
        <div style={{ position: "relative", marginTop: "30px" }}>
          <div ref={containerRef} style={{ display: "flex", gap: "15px", transition: "transform 0.4s ease", padding: "0 10px" }}>
            {programs.map((p, i) => (
              <div key={i} style={cardStyle}>
                <div style={iconStyle}>{p.icon}</div>
                <h3 style={{ color: "#e63946" }}>{p.name}</h3>
                <p style={{ color: "#ccc" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
            <button style={btnStyle} onClick={prevSlide} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} >
              ◀
            </button>
            <button style={btnStyle} onClick={nextSlide} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} >
              ▶
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
