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
    fontSize: "2.5rem",
    color: "#e63946",
    marginBottom: "20px",
  };

  const paragraph = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#ccc",
  };

  const imageContainer = {
    flex: "1 1 400px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "650px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={textContainer}>
        <h2 style={heading}>About Phoenix Fitness</h2>
        <p style={paragraph}>
          At Phoenix Fitness, we empower individuals to transform their lives
          through personalized training, nutrition guidance, and a supportive
          community. Our mission is to help you achieve your fitness goals,
          whether it's building strength, losing weight, or boosting overall
          wellness. Join us and discover a healthier, stronger version of
          yourself!
        </p>
      </div>

      <div style={imageContainer}>
        <img
          src="/pheonix2.jpg"
          alt="Phoenix Fitness"
          style={imageStyle}
        />
      </div>
    </section>
  );
}

export default AboutUs;
