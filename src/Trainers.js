import React from "react";

function Trainers() {
  const sectionStyle = {
    padding: "60px 10%",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  };

  const trainerGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const card = {
    backgroundColor: "#111",
    borderRadius: "10px",
    padding: "20px",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "10px",
    height: "250px",
    objectFit: "cover",
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          .trainer-grid {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>

      <section id="trainers" style={sectionStyle}>
        <h2>Meet Our Trainers</h2>
        <div className="trainer-grid" style={trainerGrid}>
          <div style={card}>
            <img src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648" alt="Trainer 1" style={imgStyle} />
            <h3>John Carter</h3>
            <p>Strength & Conditioning Coach</p>
          </div>
          <div style={card}>
            <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1" alt="Trainer 2" style={imgStyle} />
            <h3>Sarah Kim</h3>
            <p>Yoga Instructor</p>
          </div>
          <div style={card}>
            <img src="/pheonix-fitness/gymholic.jpeg" alt="Trainer 3" style={imgStyle} />
            <h3>Mike Ross</h3>
            <p>Personal Trainer</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
