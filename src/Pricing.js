import React from "react";

function Pricing() {
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

  const btn = {
    marginTop: "15px",
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          .price-grid {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>

      <section id="pricing" style={sectionStyle}>
        <h2>Membership Plans</h2>
        <div className="price-grid" style={grid}>
          <div style={card}><h3>Basic</h3><p>₹999 / month</p></div>
          <div style={card}><h3>Pro</h3><p>₹1,999 / month</p></div>
          <div style={card}><h3>Premium</h3><p>₹2,999 / month</p></div>
        </div>
        <div className="price-grid" style={grid}>
             <div style={card}><h3>Basic</h3><p>₹999 / month</p></div>
          <div style={card}><h3>Pro</h3><p>₹1,999 / month</p></div>
          <div style={card}><h3>Premium</h3><p>₹2,999 / month</p></div>
        </div>
      </section>
      <section id="location" style={{ padding: "40px", textAlign: "center", background: "#f9f9f9" }}>
  <h2 style={{ fontSize: "2rem", color: "#1e90ff" }}>Our Location</h2>
  <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.437339317929!2d78.39431167493714!3d17.486624483417597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913704e1785f%3A0x6682508c38343b23!2sPhoenix%20fitness!5e0!3m2!1sen!2sin!4v1760279266213!5m2!1sen!2sin"
    width="600" 
    height="450"
     style={{ border: 0, borderRadius: "12px" }}
      allowFullScreen=""
      loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>

    </>
  );
}

export default Pricing;
