import React from "react";
import Hero from "../Components/hero";
import LegalSection from "../Components/LegalSection";
import LegalSolutions from "../Components/LegalSolutions";
import Practice from "../Components/practice";
import Testimonial from "../Components/testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Practice />
      <LegalSection />
      <Testimonial />
      <LegalSolutions />
    </div>
  );
};

export default HomePage;
