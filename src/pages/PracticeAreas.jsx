import React from "react";
import Practice from "../Components/practice";
import LegalSection from "../Components/LegalSection";
import Banner from "../Components/banner";

const PracticeAreas = () => {
  return (
    <div>
      <Banner
        title="Our Practice Areas"
        description="Expertise in corporate, civil, and criminal law tailored to your needs."
      />
      <Practice />
      <LegalSection />
    </div>
  );
};

export default PracticeAreas;
