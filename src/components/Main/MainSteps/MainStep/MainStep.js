function MainStep({ steps }) {
  return (
    <>
      <div className="main-step__step">
        <div className="main-step__number">{steps.number}</div>
        <div className="main-step__content">
          <h3 className="main-step__title">{steps.title}</h3>
          <p className="main-step__description">{steps.description}</p>
        </div>
      </div>
    </>
  );
}

export default MainStep;
