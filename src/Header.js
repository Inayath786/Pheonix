import React, { useState } from "react";
import useResponsive from "./useResponsive";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


export default function Header({ scrollToSection, openModal }) {
  const { isMobile } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

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
      padding: isMobile ? "10px 20px" : "15px 40px",
      zIndex: 1000,
      boxSizing: "border-box",
      boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
    },
    logo: { fontSize: isMobile ? "18px" : "22px", fontWeight: "700", cursor: "pointer" },
    nav: {
      display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      position: isMobile ? "absolute" : "static",
      top: isMobile ? "60px" : "auto",
      left: isMobile ? 0 : "auto",
      right: isMobile ? 0 : "auto",
      width: isMobile ? "100%" : "auto",
      background: isMobile ? "#111" : "none",
      gap: "20px",
      padding: isMobile ? "10px 0" : 0,
      textAlign: "center",
      zIndex: 999,
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      cursor: "pointer",
      padding: isMobile ? "12px 0" : "10px 0",
      display: isMobile ? "block" : "inline-block",
      width: isMobile ? "100%" : "auto",
    },
    btn: {
      background: "#ff4500",
      color: "white",
      border: "none",
      padding: isMobile ? "8px 14px" : "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "600",
    },
    menuIcon: { fontSize: "26px", cursor: "pointer", display: isMobile ? "block" : "none" },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => scrollToSection("home")}>
        🔥 Phoenix Fitness
      </div>

      <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav style={styles.nav}>
        <a style={styles.navLink} onClick={() => { scrollToSection("home"); setMenuOpen(false); }}>Home</a>
        <a style={styles.navLink} onClick={() => { scrollToSection("about"); setMenuOpen(false); }}>About</a>
        <a style={styles.navLink} onClick={() => { scrollToSection("services"); setMenuOpen(false); }}>Services</a>
        <a style={styles.navLink} onClick={() => { scrollToSection("pricing"); setMenuOpen(false); }}>Pricing</a>
        <a style={styles.navLink} onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}>Contact</a>
      </nav>
      

      {/* {!isMobile && (
        <button style={styles.btn} onClick={openModal}>
          Book Trial
        </button>
      )} */}
    </header>
  );
}
