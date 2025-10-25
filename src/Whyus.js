import React from "react";

const WhyUs = () => {
  const whyUsPoints = [
    "Certified Trainers",
    "Personalized Plans",
    "State-of-the-art Equipment",
    "Flexible Timings",
    "Group Classes & Community",
    "Nutrition Guidance"
  ];

  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
 background: "linear-gradient(135deg, #232526, #414345",
    fontFamily: "Arial, sans-serif"
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "20px 0",
    position: "relative",
    color: "#111"
  };

  const lineCrossStyle = {
    width: "100px",
    height: "2px",
    backgroundColor: "#111",
    margin: "0 auto",
    position: "relative",
    marginBottom: "20px",
    marginTop: "20px"
  };

  const lineCrossBeforeAfter = {
    content: '""',
    position: "absolute",
    top: "-6px",
    width: "2px",
    height: "14px",
    backgroundColor: "#111",
    left: "0",
    right: "0",
    margin: "auto"
  };

  const pointsContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  };

  const pointStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    fontSize: "1rem",
    fontWeight: "500"
  };

  return (
    <section style={containerStyle}>
      <div style={lineCrossStyle}>
        <div style={lineCrossBeforeAfter}></div>
        <div style={{ ...lineCrossBeforeAfter, transform: "rotate(90deg)" }}></div>
      </div>

      <h2 style={headingStyle}>Why Us</h2>

      <div style={lineCrossStyle}>
        <div style={lineCrossBeforeAfter}></div>
        <div style={{ ...lineCrossBeforeAfter, transform: "rotate(90deg)" }}></div>
      </div>

      <div style={pointsContainerStyle}>
        {whyUsPoints.map((point, index) => (
          <div key={index} style={pointStyle}>
            {point}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
