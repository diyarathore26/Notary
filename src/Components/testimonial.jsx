import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Lina Gold",
    role: "Owner, Ford",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
  },
  {
    name: "Mike Fisher",
    role: "Owner, Ford",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
  },
  {
    name: "Sheen Yu",
    role: "Owner, Ford",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials">
      <h2>Happy Customers</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="profile">
              <img src={t.image} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
            <p className="review">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
