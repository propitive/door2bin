function MainFeature({ icon, paragraph, subtitle }) {
  return (
    <div className="main-feature">
      <img className="main-feature__icon" src={icon} alt="Feature's icon" />
      <h3 className="main-feature__subtitle">{subtitle}</h3>
      {/* <p className="main-feature__paragraph">{paragraph}</p> */}
    </div>
  );
}

export default MainFeature;
