import React from "react";

function Location() {
  const sectionStyle = {
    padding: "60px 8%",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    color: "#fff",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "30px",
  };

  const mapContainer = {
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
    width: "100%",
    maxWidth: "800px",
    height: "400px",
    margin: "0 auto",
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            iframe {
              height: 300px !important;
            }
          }
        `}
      </style>

      <section id="location" style={sectionStyle}>
        <h2 style={headingStyle}>📍 Find Us</h2>

        <div style={mapContainer}>
          <iframe
            title="Phoenix Fitness Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60888.900701055856!2d78.36469783803919!3d17.480938590637326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913704e1785f%3A0x6682508c38343b23!2sPhoenix%20fitness!5e0!3m2!1sen!2sin!4v1761555332775!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Location;
