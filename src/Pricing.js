import React from "react";

export default function Pricing() {
  const sectionStyle = {
    padding: "60px 5%", // reduced side padding for mobile fit
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "25px",
    marginTop: "40px",
  };

  const card = {
    backgroundColor: "#1a1a1a",
    padding: "25px 20px",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    border: "1px solid #222",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "280px",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 0 15px rgba(230,57,70,0.3)",
    borderColor: "#e63946",
  };

  const btn = {
    marginTop: "15px",
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease, transform 0.2s ease",
    alignSelf: "center",
  };

  const plans = [
    {
      name: "Basic",
      price: "₹999 / month",
      features: ["Gym Access", "1 Trainer Session", "Locker Access"],
    },
    {
      name: "Pro",
      price: "₹1,999 / month",
      features: ["All Basic Features", "5 Trainer Sessions", "Diet Plan"],
    },
    {
      name: "Premium",
      price: "₹2,999 / month",
      features: ["All Pro Features", "Personal Trainer", "Sauna Access"],
    },
    {
      name: "Elite",
      price: "₹3,999 / month",
      features: ["All Premium Features", "Unlimited Training", "VIP Lounge"],
    },
  ];

  return (
    <>
      <style>
        {`
        .price-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        @media (max-width: 1200px) {
          .price-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 992px) {
          .price-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .price-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        .price-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 20px rgba(230,57,70,0.3);
          border-color: #e63946;
        }

        .price-btn:hover {
          background-color: #ff4d5a;
          transform: scale(1.05);
        }
        `}
      </style>

      <section id="pricing" style={sectionStyle}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>Membership Plans</h2>
        <p style={{ color: "#aaa", marginBottom: "35px" }}>
          Choose the perfect plan that fits your fitness goals.
        </p>

        <div className="price-grid">
          {plans.map((plan, index) => (
            <div key={index} className="price-card" style={card}>
              <h3 style={{ color: "#e63946", fontSize: "1.5rem" }}>{plan.name}</h3>
              <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>{plan.price}</p>
              <ul style={{ listStyle: "none", padding: 0, color: "#ccc", lineHeight: "1.8" }}>
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button className="price-btn" style={btn}>Join Now</button>
            </div>
          ))}
        </div>
      </section>

      <section
        id="location"
        style={{
          padding: "50px 5%",
          textAlign: "center",
          background: "#f9f9f9",
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "#e63946" }}>Our Location</h2>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.437339317929!2d78.39431167493714!3d17.486624483417597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913704e1785f%3A0x6682508c38343b23!2sPhoenix%20fitness!5e0!3m2!1sen!2sin!4v1760279266213!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "12px", maxWidth: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Phoenix Fitness Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}
