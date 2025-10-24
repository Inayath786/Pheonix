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
        <h2 style={heading}>Phoenix Fitness Hyderabad</h2>
        <p style={paragraph}>
        Transform Your Life with Phoenix Fitness – Personalized Training & Nutrition Guidance

At Phoenix Fitness, we help individuals achieve their fitness goals through personalized training programs,
 custom nutrition plans, and a supportive fitness community. Whether you want to lose weight, build muscle,
  increase strength, or boost overall wellness, our expert trainers and nutrition specialists guide you every
   step of the way. Join Phoenix Fitness today and discover a healthier, stronger, and fitter version of yourself!
        </p>
      </div>

      <div style={imageContainer}>
        <img
          src="/pheonix2.jpg"
          alt="Phoenix Fitness GYM"
          style={imageStyle}
        />
      </div>
    </section>
  );
}

export default AboutUs;
