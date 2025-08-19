import React from "react";
import Banner from "../Components/banner";
import Testimonial from "../Components/testimonial";
import LegalSection from "../Components/LegalSection";

const Testimonials = () => {
  return (
    <div>
      <Banner
        title="Get in Touch"
        description="Reach out to us today for consultations and legal support."
      />
      <Testimonial />
      <LegalSection />
    </div>
  );
};

export default Testimonials;
