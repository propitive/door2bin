import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

import aboutParallax from "../../../images/components/about/aboutParallax.jpg";
import checkmark from "../../../images/icons/green-checkmark.png";

function AboutParallax() {
  const [bgHeight, setBgHeight] = useState("700px");

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth < 1000) {
      //   setBgHeight("550px"); // For small screens (e.g., mobile)
      // }
      // if (window.innerWidth >= 1000 && window.innerWidth < 1250) {
      //   setBgHeight("950px"); // For medium screens (e.g., tablets)
      // }
      if (window.innerWidth < 1250) {
        setBgHeight("950px"); // For medium screens (e.g., tablets)
      } else if (window.innerWidth >= 1250 && window.innerWidth < 1450) {
        setBgHeight("750px"); // For large screens (e.g., small desktops)
      } else {
        setBgHeight("850px"); // For extra-large screens (e.g., large desktops)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <Parallax
      bgImageStyle={{ height: bgHeight }}
      strength={400}
      bgImage={aboutParallax}
    >
      <div className="about-parallax__parallax">
        <div className="about-parallax__provide">
          <h3 className="about-parallax__provide-header">We provide:</h3>
          {features.map((feature) => {
            return (
              <div className="about-parallax__provide-feature">
                <img
                  className="about-parallax__provide-checkmark"
                  src={checkmark}
                />
                <p className="about-parallax__provide-text">{feature.text}</p>
              </div>
            );
          })}
        </div>
        <div className="about-parallax__text-container">
          <h1 className="about-parallax__parallax-header">
            Reliable & Premium Valet Trash Service
          </h1>
          <p className="about-parallax__parallax-text">
            Born in the heart of Dallas-Fort Worth, Door2Bin is a locally owned,
            premium valet trash provider committed to delivering the highest
            quality waste services in the area.
          </p>
        </div>
      </div>
      {/* <div className="about-parallax__parallax-overlay"></div> */}
    </Parallax>
  );
}

export default AboutParallax;
