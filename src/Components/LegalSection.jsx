import React from "react";
import "../styles/LegalSection.css";

const LegalSection = () => {
  return (
    <section className="legal-section">
      {/* Left: Images */}
      <div className="legal-images">
        <img
          src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg"
          alt="Lawyer 1"
          className="image"
        />
        <img
          src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
          alt="Lawyer 2"
          className="image"
        />
      </div>

      {/* Right: Content */}
      <div className="legal-content">
        <h2>
          We Provide Highly <span>Reliable & Effective</span> Legal Solutions
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
          explicabo iste a labore id est quas, doloremque veritatis! Provident
          odit pariatur dolorem quisquam, voluptatibus voluptates optio
          accusamus, vel quasi quidem!
        </p>
        <button className="appointment-btn">Book an appointment</button>
      </div>
    </section>
  );
};

export default LegalSection;
