import AboutHero from "./AboutHero/AboutHero";
import AboutHow from "./AboutHow/AboutHow";
import AboutParallax from "./AboutParallax/AboutParallax";
import AboutValues from "./AboutValues/AboutValues";

function About() {
  return (
    <>
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
