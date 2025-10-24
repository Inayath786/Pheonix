import React from "react";

function Contact() {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease",
    zIndex: 1000,
    fontSize: "16px",
  };

  // Adjust size for mobile using window width
  const handleResize = () => {
    if (window.innerWidth < 480) {
      return {
        ...buttonStyle,
        padding: "10px 14px",
        fontSize: "14px",
        bottom: "15px",
        right: "15px",
      };
    }
    return buttonStyle;
  };

  const [style, setStyle] = React.useState(handleResize());

  React.useEffect(() => {
    const onResize = () => setStyle(handleResize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918309963048?text=Hello%20I%20want%20to%20know%20more%20about%20your%20GYM!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={style}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Chat on WhatsApp 💬
        </button>
      </a>
    </>
  );
}

export default Contact;
