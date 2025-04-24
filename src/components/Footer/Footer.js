import EmailListForm from "../EmailListForm/EmailListForm";
import { Link } from "react-router-dom";

function Footer({ handleEmailListModalOpen }) {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__column">
          <h4 className="footer__column-title">Navigation</h4>
          <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
            <p className="footer__column-link">Home</p>
          </Link>
          <Link
            to="/soccer/mens/mls/fc-dallas"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">Fc Dallas</p>
          </Link>
          {/* <Link
            to="/services/kitchen-cabinets"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">Kitchen Cabinets</p>
          </Link>
          <Link
            to="/services/vinyl-planking"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">Vinyl Planking</p>
          </Link> */}
        </div>
        {/* <div className="footer__column">
          <h4 className="footer__column-title">Our Company</h4>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">About</p>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none", color: "#f5f0f0" }}>
            <p className="footer__column-link">Blog</p>
          </Link>
          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">Gallery</p>
          </Link>
        </div> */}
        <div className="footer__column">
          <h4 className="footer__column-title">Socials</h4>
          <p className="footer__column-link">
            <a
              className="footer__column-link"
              href="https://www.facebook.com/profile.php?id=61559787204610"
              target="_blank"
            >
              Facebook
            </a>
          </p>
          <p className="footer__column-link">
            <a
              className="footer__column-link"
              href="https://www.instagram.com/tribuna_total/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
      <EmailListForm handleEmailListModalOpen={handleEmailListModalOpen} />
    </footer>
  );
}

export default Footer;
