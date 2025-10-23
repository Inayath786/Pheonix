import React, { useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Rahul Mehta",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Phoenix Fitness completely changed my lifestyle! The trainers are extremely motivating and the environment pushes me to improve daily.",
    },
    {
      name: "Priya Sharma",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "I joined for a 3-month transformation and now it’s been a year. The results speak for themselves. Highly recommended!",
    },
    {
      name: "Aditya Rao",
      img: "https://randomuser.me/api/portraits/men/21.jpg",
      review:
        "The best gym in town! Equipment is top-notch, trainers are knowledgeable, and the community is so supportive.",
    },
    {
      name: "Sneha Patel",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "The group workouts are my favorite! It’s fun, challenging, and you leave feeling stronger every time.",
    },
    {
      name: "Rohit Verma",
      img: "https://randomuser.me/api/portraits/men/53.jpg",
      review:
        "Clean environment, professional trainers, and affordable pricing. Phoenix Fitness is easily a 10/10 experience.",
    },
    {
      name: "Aaradhya Iyer",
      img: "https://randomuser.me/api/portraits/women/72.jpg",
      review:
        "The personal training program helped me achieve my fitness goals faster than I imagined. Great attention to detail and form!",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const sectionStyle = {
    padding: "80px 10%",
    background: "linear-gradient(135deg, #000, #111)",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  const card = {
    backgroundColor: "#1a1a1a",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 0 25px rgba(255,255,255,0.08)",
    maxWidth: "500px",
    margin: "40px auto 20px",
    transition: "all 0.6s ease",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "3px solid #e63946",
  };

  const nameStyle = {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#e63946",
    fontSize: "1.1rem",
  };

  const btnContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const btnStyle = {
    background: "#ff4500",
    border: "none",
    padding: "10px 18px",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
  };

  const dotsContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  };

  const dot = (isActive) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: isActive ? "#ff4500" : "#666",
    transition: "all 0.3s ease",
  });

  return (
    <section id="testimonials" style={sectionStyle}>
      <h2 style={{ fontSize: "2rem", letterSpacing: "1px" }}>What Our Members Say</h2>
      <p style={{ color: "#bbb", marginTop: "10px" }}>
        Real stories from real people who’ve transformed their lives at Phoenix Fitness.
      </p>

      <div style={card}>
        <img
          src={reviews[currentIndex].img}
          alt={reviews[currentIndex].name}
          style={imgStyle}
        />
        <p
          style={{
            fontStyle: "italic",
            color: "#ccc",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          “{reviews[currentIndex].review}”
        </p>
        <h4 style={nameStyle}>– {reviews[currentIndex].name}</h4>
      </div>

      {/* Buttons */}
      <div style={btnContainer}>
        <button
          style={btnStyle}
          onClick={prevReview}
          onMouseEnter={(e) => (e.target.style.background = "#e13c00")}
          onMouseLeave={(e) => (e.target.style.background = "#ff4500")}
        >
          ◀ Previous
        </button>
        <button
          style={btnStyle}
          onClick={nextReview}
          onMouseEnter={(e) => (e.target.style.background = "#e13c00")}
          onMouseLeave={(e) => (e.target.style.background = "#ff4500")}
        >
          Next ▶
        </button>
      </div>

      {/* Dots Indicator */}
      <div style={dotsContainer}>
        {reviews.map((_, index) => (
          <div key={index} style={dot(index === currentIndex)}></div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
