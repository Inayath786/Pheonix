import React from "react";

export default function CommunitySection() {
  const sectionStyle = {
    position: "relative",
    background: "linear-gradient(135deg, #8e0e00, #1f1c18)",
    color: "#fff",
    padding: "80px 8%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    overflow: "hidden",
    borderRadius: "15px",
  };

  const textContainer = {
    flex: "1 1 400px",
    zIndex: 2,
  };

  const heading = {
    fontSize: "2.4rem",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const paragraph = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "rgba(255,255,255,0.9)",
    marginBottom: "25px",
  };

  const buttonStyle = {
    background: "#fff",
    color: "#ff512f",
    border: "none",
    padding: "14px 30px",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  };

  const floatingImage = {
    position: "absolute",
    right: "5%",
    bottom: "0",
    width: "400px",
    opacity: 1,
    animation: "float 6s ease-in-out infinite",
  };

  return (
    <section id="community" style={sectionStyle}>
      <div style={textContainer}>
        <h2 style={heading}>Join the Phoenix Fitness Community</h2>
        <p style={paragraph}>
          Be a part of a powerful fitness community that motivates, supports,
          and grows together. At Phoenix Fitness,<br/> we believe in teamwork, 
          consistency, and pushing limits — together. Connect with fitness 
          enthusiasts, share your progress, and stay inspired every day.
        </p>
        <a href="tel:+919876543210">
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            🔥 Join Our Community
          </button>
        </a>
      </div>

      <img
        src="/gymimage.jpg" // 👈 place your floating image here
        alt="Phoenix Fitness Community"
        style={floatingImage}
      />

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          @media (max-width: 768px) {
            section#community {
              flex-direction: column;
              text-align: center;
              padding: 60px 6%;
            }
            section#community h2 {
              font-size: 1.8rem !important;
            }
            section#community p {
              font-size: 0.95rem !important;
            }
            section#community img {
              position: static !important;
              width: 250px !important;
              opacity: 0.25 !important;
              margin-top: 25px;
            }
          }
        `}
      </style>
    </section>
  );
}
