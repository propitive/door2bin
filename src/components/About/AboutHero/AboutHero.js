import logo from "../../../images/components/main/door2bin-logo__main-green.png";

import BookOnlineButton from "../../BookOnlineButton/BookOnlineButton";

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="about-hero__text">
        <h1 className="about-hero__header">
          Reliable, Hassle-Free Trash Valet Service You Can Count On
        </h1>
        <p className="about-hero__paragraph">
          Our mission is to enable an elevated tenant lifestyle by providing a
          premium valet trash service. We provide the most reliable and
          consistent service in the industry with our clean-cut and
          highly-trained valets.
        </p>
        <p className="about-hero__paragraph">
          Our valet trash services promote cleaner communities, happier
          residents, and increased property values. We offer our services
          accross DFW to multi-family housing complexes.
        </p>
        <BookOnlineButton
          className="about-hero__button"
          buttonText="Request A Quote"
          isArrowVisible={true}
        />
      </div>
      <img className="about-hero__image" src={logo} />
    </div>
  );
}

export default AboutHero;
