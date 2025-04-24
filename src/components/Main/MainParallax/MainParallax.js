import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import mainParallax from "../../../images/components/main/mainParallax.jpg";
import BookOnlineButton from "../../BookOnlineButton/BookOnlineButton";

function MainParallax() {
  const [bgHeight, setBgHeight] = useState("700px");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth < 1000) {
      //   setBgHeight("550px"); // For small screens (e.g., mobile)
      // }
      // if (window.innerWidth >= 1000 && window.innerWidth < 1250) {
      //   setBgHeight("650px"); // For medium screens (e.g., tablets)
      // }
      if (window.innerWidth >= 1250 && window.innerWidth < 1450) {
        setBgHeight("750px"); // For large screens (e.g., small desktops)
      } else {
        setBgHeight("850px"); // For extra-large screens (e.g., large desktops)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMobileResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    window.addEventListener("resize", handleMobileResize);
    return () => window.removeEventListener("resize", handleMobileResize);
  }, []);

  return (
    <Parallax
      bgImageStyle={{
        height: bgHeight,
        left: isMobile ? "100%" : "50%",
      }}
      strength={400}
      bgImage={mainParallax}
    >
      <div className="main__parallax">
        <h1 className="main__parallax-header">
          <span className="main__parallax-bold-text">Effortless</span> Trash
          Pickup, Right at{" "}
          <span className="main__parallax-bold-text">Your Door</span>
        </h1>
        <p className="main__parallax-text">
          Say goodbye to late-night trips to the dumpster! Simply set your trash
          outside, and we’ll take care of the rest.
        </p>
        <div className="main__parallax-button-container">
          <BookOnlineButton
            buttonText="Request A Quote"
            className="main__parallax-button-cta"
            isArrowVisible={true}
          />
          <BookOnlineButton
            buttonText="About Us"
            className="main__parallax-button-about"
            isArrowVisible={false}
          />
        </div>
      </div>
      {/* <div className="main__parallax-overlay"></div> */}
    </Parallax>
  );
}

export default MainParallax;
