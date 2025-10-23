import React from "react";
import useResponsive from "./useResponsive";

export default function Programs() {
  const { isMobile } = useResponsive();

  const sectionStyle = {
    padding: "80px 8%",
    background: "linear-gradient(135deg, #000, #111)",
    color: "#fff",
    textAlign: "center",
  };

  const desktopGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    marginTop: "50px",
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
  };

  const iconStyle = {
    fontSize: "2.5rem",
    marginBottom: "15px",
    color: "#e63946",
  };

  const programs = [
    {
      name: "Strength Training",
      desc: "Build muscle, gain endurance, and push your limits with personalized strength routines.",
      icon: "💪",
    },
    {
      name: "Cardio Burn",
      desc: "Enhance your stamina, heart health, and energy with high-intensity cardio sessions.",
      icon: "🏃‍♂️",
    },
    {
      name: "Yoga & Flexibility",
      desc: "Relax, stretch, and improve your posture and flexibility through calming yoga.",
      icon: "🧘‍♀️",
    },
    {
      name: "HIIT Power",
      desc: "Short, intense workouts designed to torch fat and boost metabolism.",
      icon: "🔥",
    },
    {
      name: "CrossFit Challenge",
      desc: "Dynamic workouts combining weightlifting, cardio, and functional movements.",
      icon: "🏋️‍♀️",
    },
    {
      name: "Zumba & Dance Fitness",
      desc: "Fun-filled dance sessions that burn calories and keep you moving with rhythm.",
      icon: "🎶",
    },
  ];

  return (
    <section id="programs" style={sectionStyle}>
      <h2 style={{ fontSize: "2.4rem", letterSpacing: "1px" }}>Our Programs</h2>
      <p style={{ color: "#bbb", marginTop: "10px", maxWidth: "700px", margin: "10px auto" }}>
        Explore fitness programs tailored for every goal — from building strength to finding balance.
      </p>

      {/* Desktop Grid */}
      {!isMobile && (
        <div style={desktopGrid}>
          {programs.map((p, i) => (
            <div key={i} style={cardStyle} className="program-card">
              <div style={iconStyle}>{p.icon}</div>
              <h3 style={{ color: "#e63946", marginBottom: "10px" }}>{p.name}</h3>
              <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Horizontal Scroll */}
      {isMobile && (
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "15px",
            padding: "0 10px",
            marginTop: "30px",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
          }}
        >
          {programs.map((p, i) => (
            <div
              key={i}
              style={{
                ...cardStyle,
                flex: "0 0 auto",
                scrollSnapAlign: "start",
                minWidth: "250px",
              }}
            >
              <div style={iconStyle}>{p.icon}</div>
              <h3 style={{ color: "#e63946", marginBottom: "10px" }}>{p.name}</h3>
              <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
