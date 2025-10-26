import React, { useState } from "react";

export default function Managers() {
  const managers = [
    {
      name: "Subbu",
      role: "Head Trainer",
      image: "/trainer1.jpg",
      desc: "Certified fitness coach with 10+ years of experience in strength training and transformations.",
    },
    {
      name: "Dileep Kumar",
      role: "Nutrition Specialist",
      image: "/trainer5.jpg",
      desc: "Expert in personalized diet planning and holistic wellness coaching for sustainable results.",
    },
    {
      name: "Prudhvi",
      role: "Operations Manager",
      image: "/trainer6.jpg",
      desc: "Manages gym operations ensuring a seamless experience for every Phoenix Fitness member.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % managers.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + managers.length) % managers.length);

  const sectionStyle = {
    padding: "80px 8%",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    color: "#fff",
    textAlign: "center",
    position: "relative",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "50px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
  };

  const imageStyle = {
    width: "150px",
    height: "120px",
    borderRadius: "20%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "3px solid #ff512f",
  };

  const nameStyle = {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const roleStyle = {
    color: "#ff512f",
    fontWeight: "500",
    marginBottom: "10px",
  };

  const descStyle = {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    opacity: "0.9",
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25px",
    gap: "15px",
  };

  const buttonStyle = {
    background: "#ff512f",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  };

  return (
    <section id="managers" style={sectionStyle}>
      <h2 style={headingStyle}>Our Management Team</h2>

      {/* Desktop View (Hidden in mobile) */}
      <div className="manager-grid" style={gridStyle}>
        {managers.map((manager, i) => (
          <div key={i} style={cardStyle}>
            <img src={manager.image} alt={manager.name} style={imageStyle} />
            <h3 style={nameStyle}>{manager.name}</h3>
            <p style={roleStyle}>{manager.role}</p>
            <p style={descStyle}>{manager.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel (Hidden in desktop) */}
      <div className="manager-carousel">
        <div style={cardStyle}>
          <img
            src={managers[index].image}
            alt={managers[index].name}
            style={imageStyle}
          />
          <h3 style={nameStyle}>{managers[index].name}</h3>
          <p style={roleStyle}>{managers[index].role}</p>
          <p style={descStyle}>{managers[index].desc}</p>
        </div>

        <div className="buttons" style={buttonContainer}>
          <button style={buttonStyle} onClick={prevSlide}>
            ⬅ Prev
          </button>
          <button style={buttonStyle} onClick={nextSlide}>
            Next ➡
          </button>
        </div>
      </div>

      <style>
        {`
          /* Hide carousel by default */
          .manager-carousel {
            display: none;
          }

          /* Hover effect for desktop cards */
          .manager-grid div:hover {
            transform: translateY(-10px);
          }

          /* Responsive - show only carousel in mobile */
          @media (max-width: 768px) {
            .manager-grid {
              display: none !important;
            }

            .manager-carousel {
              display: flex !important;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
            }

            .buttons {
              margin-top: 20px;
            }

            .buttons button {
              padding: 10px 20px;
              font-size: 1rem;
            }

            #managers h2 {
              font-size: 1.8rem !important;
              margin-bottom: 30px !important;
            }
          }

          @media (max-width: 480px) {
            .buttons button {
              padding: 8px 14px !important;
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
