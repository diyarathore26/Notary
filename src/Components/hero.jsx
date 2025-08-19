import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="heading">
            <strong>Notary Public</strong>{" "}
            <span className="fancy-amp">&amp;</span>{" "}
            <span className="legal-sol">Legal Solutions</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis
            cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi
            odio aliquid, accusamus.
          </p>
        </div>
        <div className="hero-form">
          <h3>Book an Appointment</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="date" />
            <button type="submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
