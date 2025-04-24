import { mainFeaturesContent } from "../../../utils/mainFeaturesContent";
import MainFeature from "../MainFeature/MainFeature";

function MainFeatures() {
  return (
    <div className="main-features">
      <h2 className="main-features__title">
        The best valet trash services company for multifamily communities
      </h2>
      <div className="main-features__benefits-container">
        {mainFeaturesContent.map((feature) => {
          return (
            <MainFeature
              icon={feature.icon}
              key={feature.subtitle}
              paragraph={feature.paragraph}
              subtitle={feature.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainFeatures;
