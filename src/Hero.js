import React from "react";
import useResponsive from "./useResponsive";

export default function Hero({ openModal }) {
  const { isMobile } = useResponsive();

  const styles = {
    hero: {
      height: "80vh",
      width: "100%",
      margin: 0, // fix side gap
      padding: isMobile ? "0 15px" : "0 40px", // reduce padding slightly to avoid overflow
      boxSizing: "border-box", // include padding inside width
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/pheonix.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      overflowX: "hidden", // prevent horizontal scroll
    },
    title: {
      fontSize: isMobile ? "32px" : "60px",
      fontWeight: "900",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginBottom: "20px",
      lineHeight: isMobile ? "40px" : "70px",
    },
    text: {
      fontSize: isMobile ? "16px" : "22px",
      maxWidth: "700px",
      marginBottom: "30px",
      color: "#f1f1f1",
    },
    btn: {
      background: "linear-gradient(90deg, #ff4500, #ff7300)",
      color: "white",
      border: "none",
      padding: isMobile ? "12px 25px" : "15px 35px",
      borderRadius: "50px",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: isMobile ? "16px" : "18px",
      transition: "all 0.3s ease",
    },
  };

  return (
    <section id="home" style={styles.hero}>
      <h1 style={styles.title}>Rise Stronger with Phoenix Fitness</h1>
      <p style={styles.text}>
        Unleash Your Fitness Potential with Expert Personal Trainers, Modern Gym Equipment, and a Supportive Fitness Community
      </p>
      {/* <button
        style={styles.btn}
        onMouseOver={(e) => (e.target.style.background = "#ff7300")}
        onMouseOut={(e) =>
          (e.target.style.background = "linear-gradient(90deg, #ff4500, #ff7300)")
        }
        onClick={openModal}
      >
        Join Now
      </button> */}
    </section>
  );
}
