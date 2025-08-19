import React from 'react'
import Banner from '../Components/banner';
import LegalSolutions from '../Components/LegalSolutions';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Banner
        title="Contact Us"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus."
      />
      <ContactForm />
      <LegalSolutions />
    </div>
  );
}

export default Contact;
