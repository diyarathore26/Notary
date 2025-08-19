import React, { useState } from "react";
import "../styles/LegalSolutions.css";

export default function LegalSolutions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to download and register?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    },
    {
      question: "How to create your paypal account?",
      answer:
        "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda.",
    },
    {
      question: "How to link your paypal and bank account?",
      answer:
        "Single-origin coffee nulla assumenda shoreditch et. Sunt aliqua put a bird on it squid, brunch 3 wolf moon tempor.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      {/* Left Side - Image */}
      <div className="left">
        <img
          src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
          alt="Lawyer"
        />
      </div>

      {/* Middle Section */}
      <div className="middle">
        <h2>
          We Have <span>Legal Solutions</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          reprehenderit perspiciatis iste culpa consequuntur consequatur eum.
        </p>
        <p>
          Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam
          facere aperiam iste nam molestias provident consectetur.
        </p>
        <ul>
          <li>✔ Aperiam iste nam molestias</li>
          <li>✔ Modi perferendis ipsa</li>
          <li>✔ Perspic iste culpa</li>
        </ul>
      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="right">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}