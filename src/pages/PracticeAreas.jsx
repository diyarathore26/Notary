import React from "react";
import Practice from "../Components/practice";
import LegalSection from "../Components/LegalSection";
import Banner from "../Components/banner";

const PracticeAreas = () => {
  return (
    <div>
      <Banner
        title="Practice Areas"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus."
      />
      <Practice />
      <LegalSection />
    </div>
  );
};

export default PracticeAreas;
