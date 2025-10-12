import React from "react";

function Programs() {
  const sectionStyle = {
    padding: "60px 10%",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "40px",
  };

  const card = {
    backgroundColor: "#222",
    padding: "30px",
    borderRadius: "10px",
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          .program-grid {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>

      <section id="programs" style={sectionStyle}>
        <h2>Our Programs</h2>
        <div className="program-grid" style={grid}>
          <div style={card}><h3>Strength Training</h3><p>Build muscle and boost endurance.</p></div>
          <div style={card}><h3>Cardio Burn</h3><p>Improve stamina and burn calories effectively.</p></div>
          <div style={card}><h3>Yoga & Flexibility</h3><p>Relax, stretch, and rejuvenate your body.</p></div>
          <div style={card}><h3>Yoga & Flexibility</h3><p>Relax, stretch, and rejuvenate your body.</p></div>
        </div>
      </section>
    </>
  );
}

export default Programs;
