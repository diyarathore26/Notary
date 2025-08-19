import "../styles/practice.css";

const PracticeCard = ({ icon, title, description }) => {
  return (
    <div className="practice-card">
      <div className="practice-icon">{icon}</div>
      <h3 className="practice-title">{title}</h3>
      <p className="practice-desc">{description}</p>
    </div>
  );
};

const Practice = () => {
  const practiceData = [
    {
      icon: "🏛️",
      title: "Bankruptcy Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero, laboriosam!",
    },
    {
      icon: "💼",
      title: "Business Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero, laboriosam!",
    },
    {
      icon: "⚖️",
      title: "Civil Rights Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero, laboriosam!",
    },
    {
      icon: "🔫",
      title: "Criminal Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero, laboriosam!",
    },
    {
      icon: "✈️",
      title: "Immigration Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero, laboriosam!",
    },
    {
      icon: "🏠",
      title: "Property Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero, laboriosam!",
    },
  ];

  return (
    <section className="practice-section">
      <h2 className="practice-heading" style={{ cursor: "pointer" }}>
        Practice <span>Areas</span>
      </h2>
      <p className="practice-subtext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="practice-grid">
        {practiceData.map((item, index) => (
          <PracticeCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Practice;
