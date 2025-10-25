import React, { useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { name: "Rahul Mehta", review: "Phoenix Fitness completely changed my lifestyle! The trainers are extremely motivating and the environment pushes me to improve daily." },
    { name: "Priya Sharma", review: "I joined for a 3-month transformation and now it’s been a year. The results speak for themselves. Highly recommended!" },
    { name: "Aditya Rao", review: "The best gym in town! Equipment is top-notch, trainers are knowledgeable, and the community is so supportive." },
    { name: "Sneha Patel", review: "The group workouts are my favorite! It’s fun, challenging, and you leave feeling stronger every time." },
    { name: "Rohit Verma", review: "Clean environment, professional trainers, and affordable pricing. Phoenix Fitness is easily a 10/10 experience." },
    { name: "Aaradhya Iyer", review: "The personal training program helped me achieve my fitness goals faster than I imagined. Great attention to detail and form!" },
  ];

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section style={{
      padding: "60px 5%",
      background: "linear-gradient(135deg, #000, #111)",
      color: "#fff",
      textAlign: "center",
      overflow: "hidden",
    }}>
      <h2 style={{ fontSize: "2rem", letterSpacing: "1px" }}>What Our Members Say</h2>
      <p style={{ color: "#bbb", marginTop: "10px", maxWidth: "600px", margin: "10px auto 40px" }}>
        Real stories from real people who’ve transformed their lives at Phoenix Fitness.
      </p>

      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "40px 20px",
        borderRadius: "20px",
        boxShadow: "0 0 25px rgba(255,255,255,0.08)",
        maxWidth: "500px",
        margin: "0 auto",
        transition: "all 0.5s ease",
        position: "relative",
      }}>
       
        <p style={{ fontStyle: "italic", color: "#ccc", fontSize: "1rem", lineHeight: "1.6" }}>
          “{reviews[currentIndex].review}”
        </p>
        <h4 style={{ marginTop: "15px", fontWeight: "bold", color: "#e63946", fontSize: "1.1rem" }}>
          – {reviews[currentIndex].name}
        </h4>

        {/* Prev / Next Buttons */}
        <button
          onClick={prevReview}
          style={{
            position: "absolute",
            top: "50%",
            left: "-40px",
            transform: "translateY(-50%)",
            background: "#ff4500",
            border: "none",
            padding: "10px 14px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          ◀
        </button>
        <button
          onClick={nextReview}
          style={{
            position: "absolute",
            top: "50%",
            right: "-40px",
            transform: "translateY(-50%)",
            background: "#ff4500",
            border: "none",
            padding: "10px 14px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        {reviews.map((_, index) => (
          <span key={index} style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: index === currentIndex ? "#ff4500" : "#666",
            display: "inline-block",
            transition: "0.3s"
          }}></span>
        ))}
      </div>

      {/* Mobile Responsive */}
      <style>
        {`
          @media (max-width: 600px) {
            button {
              left: 10px !important;
              right: 10px !important;
              top: auto !important;
              bottom: -20px;
              transform: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Testimonials;
