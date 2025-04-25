import { Helmet } from "react-helmet-async";

import AboutHero from "./AboutHero/AboutHero";
import AboutHow from "./AboutHow/AboutHow";
import AboutParallax from "./AboutParallax/AboutParallax";
import AboutValues from "./AboutValues/AboutValues";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Door2Bin</title>
        <meta
          name="description"
          content="Door2Bin offers reliable and eco-friendly valet trash services across North Texas. Serving Dallas, Fort Worth, Plano, and surrounding areas, we provide doorstep waste collection for apartments, condos, and multifamily communities. Experience hassle-free trash pickup with our licensed and insured team, ensuring cleanliness and convenience for residents and property managers alike."
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>

      <div className="about">
        {/* <AboutHow /> */}
        <AboutHero />
        <AboutParallax />
        <AboutValues />
      </div>
    </>
  );
}

export default About;
