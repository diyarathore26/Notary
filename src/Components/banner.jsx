import React from "react";
import "../styles/banner.css";

function Banner({ title, description }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: "url(/img-banner.png)",
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
