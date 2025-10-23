import React from "react";
import useResponsive from "./useResponsive";

export default function Header() {
  const { isMobile } = useResponsive();

  const headerStyle = {
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
    padding: isMobile ? "10px 15px" : "15px 40px",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
    flexWrap: isMobile ? "wrap" : "nowrap",
    gap: isMobile ? "10px" : "0",
  };

  const logoStyle = {
    fontSize: isMobile ? "18px" : "22px",
    fontWeight: "700",
    cursor: "pointer",
    flexShrink: 0,
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
    minWidth: "130px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "center",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>🔥 Phoenix Fitness</div>
      <button
        style={btnStyle}
        onClick={handleCall}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Start Free Trial
      </button>
    </header>
  );
}
