import { Helmet } from "react-helmet-async";

import MainParallax from "./MainParallax/MainParallax";
import MainFeatures from "./MainFeatures/MainFeatures";
import MainServices from "./MainServices/MainServices";
import MainSteps from "./MainSteps/MainSteps";

function Main({ handleOpenModal }) {
  return (
    <>
      <Helmet>
        <title>Home | Door2Bin</title>
        <meta
          name="description"
          content="Door2Bin offers reliable and eco-friendly valet trash services across North Texas. Serving Dallas, Fort Worth, Plano, and surrounding areas, we provide doorstep waste collection for apartments, condos, and multifamily communities. Experience hassle-free trash pickup with our licensed and insured team, ensuring cleanliness and convenience for residents and property managers alike."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="main">
        <MainParallax handleOpenModal={handleOpenModal} />
        <MainFeatures />
        <MainServices />
        <MainSteps />
      </div>
    </>
  );
}

export default Main;
