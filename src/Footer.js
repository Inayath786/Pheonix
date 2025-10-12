import React, { useState, useEffect } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerStyle = {
   background: "linear-gradient(135deg, #1a1a1a, #ff512f)",
    color: "#fff",
    textAlign: "center",
    padding: "60px 20px",
    position: "relative",
    overflow: "hidden",
  };

  const waveStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "200%",
    height: "120px",
background: "linear-gradient(135deg, #0f2027, #2c5364)"
,
    animation: "wave 8s linear infinite",
    opacity: 0.3,
  };

  const linkContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const iconContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "1.5rem",
    marginBottom: "30px",
  };

  const scrollButtonStyle = {
    position: "fixed",
    bottom: "40px",
    right: "30px",
    background: "linear-gradient(135deg, #dd2476, #ff512f)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    fontSize: "1.4rem",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    display: showButton ? "block" : "none",
    zIndex: 1000,
  };

  return (
    <>
      <footer style={footerStyle}>
        <div style={waveStyle}></div>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "15px",
            animation: "fadeInUp 1.5s ease-in-out",
          }}
        >
          Join the Phoenix Fitness Family 🔥
        </h2>
        <p style={{ fontSize: "1rem", marginBottom: "30px" }}>
          Empowering lives through fitness, dedication, and strength.
        </p>

        <div style={linkContainer}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#gallery" style={linkStyle}>Gallery</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>

        <div style={iconContainer}>
          <a href="#" style={linkStyle}><i className="fab fa-facebook"></i></a>
          <a href="#" style={linkStyle}><i className="fab fa-instagram"></i></a>
          <a href="#" style={linkStyle}><i className="fab fa-twitter"></i></a>
          <a href="#" style={linkStyle}><i className="fab fa-youtube"></i></a>
        </div>

        <p style={{ marginTop: "40px", fontSize: "0.9rem", opacity: 0.8 }}>
          © {new Date().getFullYear()} Phoenix Fitness. All Rights Reserved.
        </p>

        <style>
          {`
            @keyframes wave {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }

            button:hover {
              transform: translateY(-4px);
              box-shadow: 0 6px 20px rgba(0,0,0,0.4);
            }

            a:hover {
              color: #000;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
              footer h2 {
                font-size: 1.6rem !important;
              }
              footer p {
                font-size: 0.9rem !important;
              }
            }

            @media (max-width: 480px) {
              footer {
                padding: 40px 10px !important;
              }
              footer h2 {
                font-size: 1.3rem !important;
              }
              footer p {
                font-size: 0.85rem !important;
              }
              button {
                bottom: 25px !important;
                right: 20px !important;
                width: 45px !important;
                height: 45px !important;
              }
            }
          `}
        </style>
      </footer>

      <button style={scrollButtonStyle} onClick={scrollToTop}>
        <i className="fas fa-arrow-up">^</i>
      </button>
    </>
  );
}
