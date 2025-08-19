import React from 'react'
import Banner from '../Components/banner';
import LegalSection from '../Components/LegalSection';

const About = () => {
  return (
    <div>
      <Banner
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus."
      />
      <LegalSection />
    </div>
  );
}

export default About;
