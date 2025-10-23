import React from "react";
import useResponsive from "./useResponsive";

export default function Header() {
  const { isMobile } = useResponsive();

  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      background: "#111",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "10px 15px" : "15px 40px", // reduced side padding on mobile
      zIndex: 1000,
      boxSizing: "border-box",
      boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
      overflow: "hidden", // prevents any accidental horizontal scroll
    },
    logo: {
      fontSize: isMobile ? "18px" : "22px",
      fontWeight: "700",
      cursor: "pointer",
      flexShrink: 0, // prevents logo from shrinking
    },
    btn: {
      background: "linear-gradient(90deg, #ff6600, #ff2e63)",
      color: "white",
      border: "none",
      padding: isMobile ? "8px 12px" : "12px 25px", // slightly smaller on mobile
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: isMobile ? "13px" : "16px",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      flexShrink: 0, // prevents button from shrinking
    },
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210"; // Replace with your number
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>🔥 Phoenix Fitness</div>

      <button
        style={styles.btn}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        onClick={handleCall}
      >
        Start Free Trial
      </button>
    </header>
  );
}
