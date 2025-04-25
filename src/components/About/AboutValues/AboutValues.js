import checkmark from "../../../images/icons/green-checkmark.png";
import apartmentPhoto from "../../../images/components/about/aboutValuesPhotoBefore.jpg";

function AboutValues() {
  const companyValues = [
    {
      value: "Family",
      description: "Bring our communities together and keep them safe.",
    },
    {
      value: "Integrity",
      description: "Do the right thing, especially when its the hard thing.",
    },
    {
      value: "Grit",
      description: "Courage and resolve when the going gets tough.",
    },
    {
      value: "Humility",
      description: "Continuous improvement with a team mindset.",
    },
    {
      value: "Exceed",
      description: "We go above and beyond in every client interaction.",
    },
    { value: "No-Jerks", description: "Kindness and understanding." },
  ];

  const features = [
    { text: "Flexible Contracts" },
    { text: "Daily Service Reports" },
    { text: "Background-Checked, Professional W2 Employees" },
    { text: "Fully Licensed & Insured" },
    { text: "High-Quality Valet Trash Service" },
    { text: "Consistent & Reliable Pickup" },
    { text: "Eco-Friendly Approach" },
    { text: "Exceptional Customer Support" },
    { text: "Reduced Maintenance & Pest Control Cost" },
  ];

  return (
    <>
      <div className="about-values">
        <div className="about-values__provide">
          <h3 className="about-values__provide-header">We provide:</h3>
          {features.map((feature) => {
            return (
              <div className="about-values__provide-feature">
                <img
                  className="about-values__provide-checkmark"
                  src={checkmark}
                />
                <p className="about-values__provide-text">{feature.text}</p>
              </div>
            );
          })}
        </div>
        <div className="about-values__text">
          <h3 className="about-values__header">Our Values</h3>
          {companyValues.map((companyValue) => {
            return (
              <div className="about-values__value-container">
                <p className="about-values__value">{companyValue.value}</p>
                <p className="about-values__value-description">
                  {companyValue.description}
                </p>
              </div>
            );
          })}
        </div>
        <img
          className="about-values__image"
          src={apartmentPhoto}
          alt="Photo of beautiful, clean apartment."
        />
      </div>
    </>
  );
}

export default AboutValues;
