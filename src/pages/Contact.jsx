import React from 'react'
import Banner from '../Components/banner';
import LegalSolutions from '../Components/LegalSolutions';

const Contact = () => {
  return (
    <div>
      <Banner
        title="Get in Touch"
        description="Reach out to us today for consultations and legal support."
      />
      <LegalSolutions />
    </div>
  );
}

export default Contact;
