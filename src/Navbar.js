import React from "react";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#111",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const navLinks = {
    display: "flex",
    gap: "25px",
    listStyle: "none",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            align-items: flex-start;
          }
          ul {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
        }
        `}
      </style>

      <nav style={navStyle}>
        {/* ✅ Logo + Text together */}
        <div style={brandStyle}>
          <img src="/pheoniclogo.jpg" alt="Phoenix Fitness Logo" style={logoStyle} />
          <h2>Phoenix Fitness</h2>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
