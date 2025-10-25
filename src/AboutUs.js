import React from "react";

function AboutUs() {
  const sectionStyle = {
    padding: "80px 8%",
    background: "#111",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
  };

  const textContainer = {
    flex: "1 1 400px",
    order: 1,
  };

  const heading = {
    fontSize: "2.4rem",
    color: "#fff",
    marginBottom: "15px",
    fontWeight: "700",
    letterSpacing: "1px",
  };

  const paragraph = {
    fontSize: "1.05rem",
    lineHeight: "1.8",
    color: "#f2f2f2",
    marginBottom: "25px",
  };

  const imageContainer = {
    flex: "1 1 400px",
    textAlign: "center",
    order: 2,
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "550px",
    borderRadius: "15px",
    boxShadow: "0 5px 25px rgba(0,0,0,0.5)",
    transition: "transform 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#d31027",
    border: "none",
    padding: "14px 32px",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={textContainer}>
        <h2 style={heading}>Phoenix Fitness Hyderabad</h2>
        <p style={paragraph}>
          At Phoenix Fitness, we transform lives through smart workouts,
          personalized plans, and expert guidance. Whether your goal is weight
          loss, muscle gain, or overall wellness — our trainers help you reach
          it with focus and consistency. Join the best gym in Hyderabad and
          begin your transformation today!
        </p>
        <a href="tel:+918309963048">
          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.backgroundColor = "#d31027";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#d31027";
            }}
          >
            📞 Start Free Trial
          </button>
        </a>
      </div>

      <div style={imageContainer}>
        <img
          src="/pheonix2.jpg"
          alt="Phoenix Fitness Gym Hyderabad"
          style={imageStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
      </div>

      {/* Responsive styling */}
      <style>
        {`
        @media (max-width: 768px) {
          section#about {
            flex-direction: column;
            text-align: center;
            padding: 60px 6%;
          }

          section#about div:nth-child(1) {
            order: 1 !important;
          }

          section#about div:nth-child(2) {
            order: 2 !important;
          }

          section#about h2 {
            font-size: 1.9rem !important;
          }

          section#about p {
            font-size: 1rem !important;
          }

          section#about img {
            margin-top: 25px;
            width: 100%;
          }

          section#about button {
            width: auto;
            padding: 12px 28px !important;
          }
        }
      `}
      </style>
    </section>
  );
}

export default AboutUs;
