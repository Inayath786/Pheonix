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
    gap: "40px",
  };

  const textContainer = {
    flex: "1 1 400px",
    zIndex: 2,
    textAlign: "left",
  };

  const heading = {
    fontSize: "2.4rem",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.3",
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
    display: "inline-block",
  };

  const floatingImage = {
    flex: "1 1 400px",
    position: "relative",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "420px",
    animation: "float 6s ease-in-out infinite",
    borderRadius: "12px",
  };

  return (
    <section id="community" style={sectionStyle}>
      <div style={floatingImage}>
        <img
          src="/gymimage.jpg" // 👉 your image here
          alt="Phoenix Fitness Community"
          style={imageStyle}
        />
      </div>

      <div style={textContainer}>
        <h2 style={heading}>Join the Phoenix Fitness Community</h2>
        <p style={paragraph}>
          Be a part of a powerful fitness community that motivates, supports,
          and grows together. At Phoenix Fitness, we believe in teamwork,
          consistency, and pushing limits — together. Connect with fitness
          enthusiasts, share your progress, and stay inspired every day.
        </p>
        <a href="tel:+919876543210">
          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.background = "#ff512f";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#ff512f";
            }}
          >
            🔥 Join Our Community
          </button>
        </a>
      </div>

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
            section#community div:first-child {
              order: 1 !important;
            }
            section#community div:last-child {
              order: 2 !important;
            }
            section#community img {
              width: 260px !important;
              margin-bottom: 25px;
            }
            section#community h2 {
              font-size: 1.9rem !important;
            }
            section#community p {
              font-size: 0.95rem !important;
            }
            section#community button {
              width: auto;
              padding: 12px 28px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
