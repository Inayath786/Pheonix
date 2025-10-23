import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trainers() {
  const sectionStyle = {
    padding: "60px 8%",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  const card = {
    backgroundColor: "#111",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
    transition: "transform 0.3s ease",
    maxWidth: "280px", // limit card width
    margin: "0 auto",  // center in slide
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "10px",
    height: "250px",
    objectFit: "cover",
    marginBottom: "15px",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false, // prevents weird scaling
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false, arrows: false },
      },
    ],
  };

  const trainers = [
    { img: "/trainer2.jpg", name: "John Carter" },
    { img: "/trainer1.jpg", name: "Sarah Kim" },
    { img: "/trainer3.jpg", name: "Mike Ross" },
    { img: "https://images.unsplash.com/photo-1594737625785-cdf97e3503c9", name: "Emma Watson"},
    { img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1", name: "Liam Scott" },
  ];

  return (
    <section id="trainers" style={sectionStyle}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", fontWeight: "bold" }}>
        Meet Our Trainers
      </h2>

      <Slider {...settings}>
        {trainers.map((trainer, index) => (
          <div key={index}>
            <div
              style={card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={trainer.img} alt={trainer.name} style={imgStyle} />
              <h3 style={{ marginBottom: "8px", fontSize: "1.4rem" }}>{trainer.name}</h3>
              <p style={{ color: "#ccc" }}>{trainer.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Trainers;
