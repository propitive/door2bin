import { Helmet } from "react-helmet-async";

import MainParallax from "./MainParallax/MainParallax";
import MainFeatures from "./MainFeatures/MainFeatures";
import MainServices from "./MainServices/MainServices";
import MainSteps from "./MainSteps/MainSteps";

function Main() {
  return (
    <>
      <Helmet>
        <title>Tribuna Total</title>
        <meta
          name="description"
          content="Explore the Avanti Enterprises blog for expert tips on kitchen and bathroom cabinet remodeling in Dallas-Fort Worth. Get design ideas, trends, and home improvement advice."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="main">
        <MainParallax />
        <MainFeatures />
        <MainServices />
        <MainSteps />
      </div>
    </>
  );
}

export default Main;
