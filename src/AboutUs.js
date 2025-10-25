import React from "react";

function AboutUs() {
  const sectionStyle = {
    padding: "80px 8%",
    backgroundColor: "#111",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
  };

  const textContainer = {
    flex: "1 1 400px",
  };

  const heading = {
    fontSize: "2.3rem",
    color: "#ff512f",
    marginBottom: "15px",
    fontWeight: "700",
  };

  const paragraph = {
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "#ccc",
    marginBottom: "25px",
  };

  const imageContainer = {
    flex: "1 1 400px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #ff512f, #dd2476)",
    color: "#fff",
    border: "none",
    padding: "14px 30px",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
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
        />
      </div>

      {/* Responsive CSS */}
      <style>
        {`
        @media (max-width: 768px) {
          section#about {
            flex-direction: column-reverse;
            text-align: center;
            padding: 50px 6%;
          }

          section#about h2 {
            font-size: 1.8rem !important;
          }

          section#about p {
            font-size: 0.95rem !important;
          }

          section#about img {
            max-width: 100%;
            margin-bottom: 25px;
          }

          section#about button {
            width: 80%;
          }
        }
      `}
      </style>
    </section>
  );
}

export default AboutUs;
