import React from "react";
import Banner from "../Components/banner";
import Testimonial from "../Components/testimonial";
import LegalSection from "../Components/LegalSection";

const Testimonials = () => {
  return (
    <div>
      <Banner
        title="Happy Customers Testimonials"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus."
      />
      <Testimonial />
      <LegalSection />
    </div>
  );
};

export default Testimonials;
