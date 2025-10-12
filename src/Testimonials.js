import React from "react";

function Testimonials() {
  const sectionStyle = {
    padding: "80px 10%",
    background: "linear-gradient(135deg, #000, #111)",
    color: "#fff",
    textAlign: "center",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    marginTop: "50px",
  };

  const card = {
    backgroundColor: "#1a1a1a",
    padding: "30px 20px",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(255,255,255,0.05)",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardHover = {
    transform: "translateY(-10px)",
    boxShadow: "0 0 25px rgba(255,255,255,0.15)",
  };

  const imgStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "3px solid #e63946",
  };

  const nameStyle = {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#e63946",
  };

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

  return (
    <>
      <style>
        {`
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 25px rgba(255,255,255,0.15);
        }
        `}
      </style>

      <section id="testimonials" style={sectionStyle}>
        <h2 style={{ fontSize: "2rem", letterSpacing: "1px" }}>What Our Members Say</h2>
        <p style={{ color: "#bbb", marginTop: "10px" }}>
          Real stories from real people who’ve transformed their lives at Phoenix Fitness.
        </p>

        <div className="testimonials-grid" style={grid}>
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card" style={card}>
              <img src={r.img} alt={r.name} style={imgStyle} />
              <p style={{ fontStyle: "italic", color: "#ccc" }}>"{r.review}"</p>
              <h4 style={nameStyle}>– {r.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
