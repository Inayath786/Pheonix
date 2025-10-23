import React from "react";

function Programs() {
  const programs = [
    { name: "Strength Training", desc: "Build muscle, gain endurance, and push your limits with personalized strength routines.", icon: "💪" },
    { name: "Cardio Burn", desc: "Enhance your stamina, heart health, and energy with high-intensity cardio sessions.", icon: "🏃‍♂️" },
    { name: "Yoga & Flexibility", desc: "Relax, stretch, and improve your posture and flexibility through calming yoga.", icon: "🧘‍♀️" },
    { name: "HIIT Power", desc: "Short, intense workouts designed to torch fat and boost metabolism.", icon: "🔥" },
    { name: "CrossFit Challenge", desc: "Dynamic workouts combining weightlifting, cardio, and functional movements.", icon: "🏋️‍♀️" },
    { name: "Zumba & Dance Fitness", desc: "Fun-filled dance sessions that burn calories and keep you moving with rhythm.", icon: "🎶" },
  ];

  const sectionStyle = {
    padding: "80px 5%",
    background: "linear-gradient(135deg, #000, #111)",
    color: "#fff",
    textAlign: "center",
  };

  const cardStyle = {
    background: "linear-gradient(145deg, #1a1a1a, #222)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "15px",
    padding: "25px 15px",
    minWidth: "250px",
    flex: "0 0 auto",
    marginRight: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    marginBottom: "15px",
    color: "#e63946",
  };

  return (
    <>
      <section id="programs" style={sectionStyle}>
        <h2 style={{ fontSize: "2.4rem", letterSpacing: "1px" }}>Our Programs</h2>
        <p style={{ color: "#bbb", marginTop: "10px", maxWidth: "700px", margin: "10px auto" }}>
          Explore fitness programs tailored for every goal — from building strength to finding balance.
        </p>

        {/* Desktop Grid */}
        <div className="desktop-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
          marginTop: "50px",
        }}>
          {programs.map((p, i) => (
            <div key={i} style={cardStyle} className="program-card">
              <div style={iconStyle}>{p.icon}</div>
              <h3 style={{ color: "#e63946", marginBottom: "10px" }}>{p.name}</h3>
              <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="mobile-scroll" style={{
          display: "none",
          overflowX: "auto",
          paddingTop: "20px",
          paddingBottom: "10px",
          marginTop: "30px",
          WebkitOverflowScrolling: "touch",
        }}>
          <div style={{ display: "flex" }}>
            {programs.map((p, i) => (
              <div key={i} style={cardStyle}>
                <div style={iconStyle}>{p.icon}</div>
                <h3 style={{ color: "#e63946", marginBottom: "10px" }}>{p.name}</h3>
                <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @media (max-width: 1024px) {
            .desktop-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .desktop-grid {
              display: none;
            }
            .mobile-scroll {
              display: block;
            }
          }

          .program-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 0 25px rgba(230,57,70,0.3);
          }
        `}
      </style>
    </>
  );
}

export default Programs;
