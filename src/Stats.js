import React, { useEffect, useState } from "react";
import useResponsive from "./useResponsive";

export default function Stats() {
  const { isMobile } = useResponsive();

  const statsData = [
    { label: "Happy Customers", value: 500 },
    { label: "Trainers", value: 20 },
    { label: "Stores", value: 2 },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const interval = 30; // interval between updates
    const increments = statsData.map(stat => Math.ceil(stat.value / (duration / interval)));

    const counter = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, i) => {
          if (count < statsData[i].value) {
            return Math.min(count + increments[i], statsData[i].value);
          } else {
            return count;
          }
        })
      );
    }, interval);

    return () => clearInterval(counter);
  }, []);

  const sectionStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "80px 10%",
    background: "#111",
    color: "#fff",
    textAlign: "center",
  };

  const cardStyle = {
    flex: "1 1 200px",
    margin: "20px",
    padding: "30px 20px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #ff4500, #ff7300)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  };

  const numberStyle = {
    fontSize: isMobile ? "32px" : "48px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const labelStyle = {
    fontSize: isMobile ? "16px" : "20px",
    fontWeight: "500",
  };

  return (
    <section id="stats" style={sectionStyle}>
       
      {statsData.map((stat, i) => (
        <div key={i} style={cardStyle}>
          <div style={numberStyle}>{counts[i]}</div>
          <div style={labelStyle}>{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
