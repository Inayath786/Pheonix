import React from "react";

export default function PricingCard({ plan }) {
  // Handle undefined plan
  if (!plan) return null; // or a fallback UI

  const { name, price, features = [] } = plan; // default empty array for features

  const cardStyle = {
    background: "#111",
    padding: "30px 25px",
    borderRadius: "15px",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    textAlign: "center",
    minWidth: "250px",
  };

  const btnStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ff4500",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 25px",
    minWidth: "120px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "center",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontSize: "1.6rem", color: "#e63946" }}>{name}</h3>
      <p style={{ fontSize: "1.2rem", color: "#fff" }}>₹{price} / month</p>
      {features.length > 0 && (
        <ul style={{ textAlign: "left", color: "#ccc" }}>
          {features.map((f, i) => (
            <li key={i}>✅ {f}</li>
          ))}
        </ul>
      )}
      <button
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Join Now
      </button>
    </div>
  );
}
