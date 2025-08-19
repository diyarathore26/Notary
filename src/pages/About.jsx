import React from 'react'
import Banner from '../Components/banner';
import LegalSection from '../Components/LegalSection';

const About = () => {
  return (
    <div>
      <Banner
        title="About Our Firm"
        description="20+ years of legal expertise delivering justice and trusted counsel."
      />
      <LegalSection />
    </div>
  );
}

export default About;
