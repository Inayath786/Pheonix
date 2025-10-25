import React from "react";

function RatingsSection() {
  const sectionStyle = {
    padding: "80px 8%",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
    color: "#fff",
  };

  const textContainer = {
    flex: "1 1 400px",
  };

  const heading = {
    fontSize: "2rem",
    color: "#FFD700",
    marginBottom: "10px",
  };

  const paragraph = {
    fontSize: "1.1rem",
    color: "#ccc",
    lineHeight: "1.6",
  };

  const starContainer = {
    flex: "1 1 300px",
    position: "relative",
    height: "220px",
    backgroundImage: "url('/star-bg.png')", // ⭐ Replace with your actual image name
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const ratingNumber = {
    position: "absolute",
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#FFD700",
    textShadow: "0 3px 10px rgba(0,0,0,0.6)",
  };

  return (
    <section style={sectionStyle}>
      {/* Left Info Section */}
      <div style={textContainer}>
        <h2 style={heading}>4.9★ Rated Gym in Hyderabad</h2>
        <p style={paragraph}>
          Phoenix Fitness is proud to be one of Hyderabad’s highest-rated gyms with a 4.9★ 
          community score. Our members love our professional trainers, clean facilities, 
          and motivating environment that fuels every fitness journey.
        </p>
      </div>

      {/* Right Star with Rating */}
      {/* <div style={starContainer}>
        <span style={ratingNumber}>4.9★</span>
      </div> */}
    </section>
  );
}

export default RatingsSection;
