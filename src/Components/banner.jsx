import React from "react";
import "../styles/banner.css";

function Banner({ title, description }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/lawyer-businessman-working-with-lawbook-office-courtroom-legal-counsel-with-gavel-legal-law-justice-lawyer-concept-judge-gavel-hammer-lawyer-desk_1715-18662.jpg')",
      }}
    >
      <div className="banner-overlay">
        <div className="Banner-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
