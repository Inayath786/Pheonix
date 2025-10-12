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
        <h2>Phoenix Fitness</h2>
        <ul style={navLinks}>
          <li><a href="#hero" style={linkStyle}>Home</a></li>
          <li><a href="#about" style={linkStyle}>About</a></li>
          <li><a href="#programs" style={linkStyle}>Programs</a></li>
          <li><a href="#trainers" style={linkStyle}>Trainers</a></li>
          <li><a href="#pricing" style={linkStyle}>Pricing</a></li>
          <li><a href="#contact" style={linkStyle}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
