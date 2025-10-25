import React from "react";

export default function PricingCard() {
  const plans = [
    {
      name: "Basic Plan",
      price: 999,
      features: [
        "Access to all gym equipment",
        "Locker facility",
        "1 Trainer session/week",
        "Flexible timings",
      ],
    },
    {
      name: "Premium Plan",
      price: 1499,
      features: [
        "All Basic Plan features",
        "Unlimited trainer support",
        "Personalized diet plan",
        "Body composition analysis",
        "Access to group classes",
      ],
    },
    {
      name: "Elite Plan",
      price: 1999,
      features: [
        "All Premium Plan features",
        "Dedicated personal trainer",
        "Monthly progress tracking",
        "Nutrition & supplement guidance",
        "VIP access to all facilities",
      ],
    },
  ];

  const sectionStyle = {
    padding: "50px 5%",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.2rem",
    color: "#ff3c00",
    marginBottom: "40px",
  };

  const cardsContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "20px",
  };

  const cardStyle = {
    background: "linear-gradient(145deg, #111, #1a1a1a)",
    padding: "25px 20px",
    borderRadius: "18px",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    textAlign: "center",
    width: "300px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const featureListStyle = {
    textAlign: "left",
    color: "#ccc",
    lineHeight: "1.7",
    fontSize: "0.95rem",
    width: "100%",
    maxWidth: "250px",
  };

  const btnStyle = {
    background: "linear-gradient(90deg, #ff4500, #ff6a00)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 30px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    marginTop: "auto", // Ensures button stays aligned at bottom
  };

  return (
    <section id="pricing" style={sectionStyle}>
      <h2 style={titleStyle}>Our Membership Plans</h2>

      <div style={cardsContainer}>
        {plans.map((plan, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
            }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "#ff6347" }}>{plan.name}</h3>
            <p style={{ fontSize: "1.2rem", color: "#fff" }}>₹{plan.price} / month</p>

            <ul style={featureListStyle}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>

            <button
              style={btnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Add proper responsive media queries */}
      <style>
        {`
          @media (max-width: 768px) {
            #pricing {
              padding: 30px 4%;
            }

            #pricing h2 {
              font-size: 1.8rem !important;
              margin-bottom: 25px !important;
            }

            #pricing div {
              flex-direction: column !important;
              align-items: center !important;
            }

            #pricing div > div {
              width: 90% !important;
              max-width: 360px !important;
              margin-bottom: 20px !important;
            }

            #pricing button {
              padding: 10px 25px !important;
              font-size: 0.9rem !important;
              width: 80% !important;
            }
          }
        `}
      </style>
    </section>
  );
}
